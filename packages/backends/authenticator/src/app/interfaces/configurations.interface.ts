import { ConfigFactory } from "@nestjs/config";
import { Environment } from "./environment.interface";

export type Configuration = ConfigFactory<Environment>;
