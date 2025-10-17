export interface Config {
  port: number;
  maxPaymentLimit: number;
}

const config: Config = {
  port: 3002,
  maxPaymentLimit: 5000,
};

export default config;
