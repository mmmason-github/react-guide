/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable require-await */

import { Body, Controller, Post } from "@nestjs/common";

import { CreateUserRequest } from "../interfaces/request/user.request";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Controller({ host: ["localhost"], path: ["user"] })
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post(["/create"])
  public async create(
    @Body() createRequest: CreateUserRequest
  ): Promise<UserEntity> {
    return this._userService.create(createRequest);
  }
}
