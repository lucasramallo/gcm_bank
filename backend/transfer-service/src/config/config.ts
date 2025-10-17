export interface Config {
  port: number;
  maxTransferLimit: number;
}

const config: Config = {
  port: 3001,
  maxTransferLimit: 10000,
};

export default config;
