import CryptoJS from "crypto-js";

const SECRET_KEY = "sua-chave-secreta-aqui";

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}


export const loginService = async (
  email: string,
  password: string,
  role: string
): Promise<LoginResponse> => {
  try {
    let encryptedPassword: string;


    if (role === "caixa") {
      encryptedPassword = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
    } else {
      encryptedPassword = CryptoJS.SHA256(password).toString();
    }


    const mockUsers = [
      {
        role: "caixa",
        email: "caixa@email.com",
        password: CryptoJS.AES.encrypt("1234", SECRET_KEY).toString(),
      },
      {
        role: "bb",
        email: "bb@email.com",
        password: CryptoJS.SHA256("abcd").toString(),
      },
    ];
    const user = mockUsers.find((u) => u.role === role && u.email === email);


    if (!user) {
      return {
        success: false,
        message: "Usuário não encontrado para este banco",
      };
    }


    let isPasswordValid = false;


    if (role === "caixa") {
      const bytesInput = CryptoJS.AES.decrypt(encryptedPassword, SECRET_KEY);
      const decryptedInput = bytesInput.toString(CryptoJS.enc.Utf8);


      const bytesStored = CryptoJS.AES.decrypt(user.password, SECRET_KEY);
      const decryptedStored = bytesStored.toString(CryptoJS.enc.Utf8);


      isPasswordValid = decryptedInput === decryptedStored;
    } else {
      isPasswordValid = encryptedPassword === user.password;
    }


    if (isPasswordValid) {
      return {
        success: true,
        message: `Login bem-sucedido (${role.toUpperCase()})`,
        token: `${role}-fake-jwt-token-123456`,
      };
    } else {
      return {
        success: false,
        message: "Senha incorreta",
      };
    }
  } catch (error) {
    console.error("Erro no loginService:", error);
    return {
      success: false,
      message: "Erro ao processar o login",
    };
  }
};
