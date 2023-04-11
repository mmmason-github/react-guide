export interface Environment {
  authentication: Authentication;
  backend: Backend;
  database: Database;
  frontend: Frontend;
  production: Production;
}

export interface Authentication {
  encryption: string;
  type: string;
  use: boolean;
}

export interface Backend {
  host: string;
  port: number;
}

export interface Database {
  host: string;
  password: string;
  port: number;
  type: string;
  user: string;
}

export interface Frontend {
  host: string;
  port: number;
}

export interface Production {
  debug: boolean;
}
