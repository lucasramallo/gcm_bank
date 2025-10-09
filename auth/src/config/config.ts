export interface Config {
  port: number;
  cryptoKey: string;
}

const config: Config = {
  port: 3000,
  cryptoKey: "fake-secret-key",
};

export default config;
