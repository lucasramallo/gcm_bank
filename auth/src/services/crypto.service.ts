import crypto from "crypto";
import config from "../config/config";

export class CryptoService {
  private getKeyAndIv(): { key: Buffer; iv: Buffer } {
    const key = crypto.scryptSync(config.cryptoKey, "salt", 24);
    const iv = crypto.randomBytes(16);
    return { key, iv };
  }

  hashPassword(password: string): string {
    console.log(`[SERVICE] Hashing password`);
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  encrypt(data: string): { encrypted: string; iv: string } {
    console.log(`[SERVICE] Encrypting data: ${data}`);

    const { key, iv } = this.getKeyAndIv();

    const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");

    console.log(
      `[SERVICE] Simulating notify other services: Encrypted data ready for transfer`
    );

    return {
      encrypted,
      iv: iv.toString("hex"),
    };
  }

  decrypt(encrypted: string, ivHex: string): string {
    console.log(`[SERVICE] Decrypting data: ${encrypted}`);

    const key = crypto.scryptSync(config.cryptoKey, "salt", 24);
    const iv = Buffer.from(ivHex, "hex");

    const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  }
}

export default new CryptoService();
