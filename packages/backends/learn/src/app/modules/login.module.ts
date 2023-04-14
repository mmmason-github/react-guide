/* eslint-disable new-cap */

import { LoginController } from "../controllers/login.controller";
import { LoginEntity } from "../entities/login.entity";
import { LoginService } from "../services/login.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [LoginController],
  exports: [],
  imports: [TypeOrmModule.forFeature([LoginEntity])],
  providers: [LoginService]
})
export class LoginModule {}
