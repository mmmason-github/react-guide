import { Environment } from "../app/interfaces/environment.interface";

export const environment: Environment = {
  authentication: {
    encryption: "",
    type: "",
    use: false
  },
  backend: {
    host: "localhost",
    port: 3000
  },
  database: {
    host: "localhost",
    password: "test",
    port: 0,
    type: "mysql",
    user: "test"
  },
  frontend: {
    host: "localhost",
    port: 4200
  },
  production: {
    debug: true
  }
};
