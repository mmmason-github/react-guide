/* eslint-disable new-cap */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";

import { AuthModule } from "./auth.module";
import { ConfigModule } from "./config.module";
import { LoginEntity } from "../entities/login.entity";
import { LoginModule } from "./login.module";
import { RootController } from "../controllers/root.controller";
import { RootService } from "../services/root.service";
import { TaskModule } from "./task.module";
import { UserEntity } from "../entities/user.entity";
import { UserModule } from "./user.module";

@Module({
  controllers: [RootController],
  exports: [],
  imports: [
    AuthModule,
    ConfigModule,
    LoginModule,
    TaskModule,
    TypeOrmModule.forRoot({
      database: join(__dirname, "database", "database.sqlite"),
      dropSchema: true,
      entities: [LoginEntity, UserEntity],
      retryAttempts: 3,
      retryDelay: 10000,
      synchronize: true,
      type: "sqlite"
    }),
    UserModule
  ],
  providers: [RootService]
})
export class RootModule {}
