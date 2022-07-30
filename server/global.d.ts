declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    DATABASE_URL: string;
    PASSWORD_SALT_ROUNDS: string;
    JWT_SECRET: string;
    MAILER_USER: string;
    MAILER_PASS: string;
    MAILER_HOST: string;
    MAILER_PORT: string;
    HOST_URL: string;
  }
}
