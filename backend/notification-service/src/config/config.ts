export interface Config {
  port: number;
  smtpServiceUrl: string;
}

const config: Config = {
  port: 3003,
  smtpServiceUrl: "http://smtp-service.example.com/send",
};

export default config;
