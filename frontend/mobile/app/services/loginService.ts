import CryptoJS from "crypto-js";

const SECRET_KEY = "sua-chave-secreta-aqui";

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

export const loginService = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      SECRET_KEY
    ).toString();

    const mockUser = { email: "user@example.com", password: "password123" };
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, SECRET_KEY);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (email === mockUser.email && decryptedPassword === mockUser.password) {
      return {
        success: true,
        message: "Login bem-sucedido",
        token: "fake-jwt-token-123456",
      };
    } else {
      return {
        success: false,
        message: "Credenciais inválidas",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Erro ao processar o login",
    };
  }
};
