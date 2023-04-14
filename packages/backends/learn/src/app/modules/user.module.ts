/* eslint-disable new-cap */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserController } from "../controllers/user.controller";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Module({
  controllers: [UserController],
  exports: [],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService]
})
export class UserModule {}
