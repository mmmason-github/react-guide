/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable require-await */

import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { CreateUserRequest } from "../interfaces/request/user.request";
import { UserEntity } from "../entities/user.entity";

@Injectable({})
export class UserService {
  public constructor(
    @InjectRepository(UserEntity)
    private _usersRepository: Repository<UserEntity>
  ) {}

  public async create(createRequest: CreateUserRequest): Promise<UserEntity> {
    return this._usersRepository.save({
      email: createRequest.email,
      password: createRequest.password
    });
  }
}
