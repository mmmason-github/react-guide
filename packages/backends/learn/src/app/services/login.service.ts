/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */

import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { LoginEntity } from "../entities/login.entity";
import { ReadLoginRequestQuery } from "../interfaces/request/login.request";
import { ReadLoginResponse } from "../interfaces/response/login.response";

@Injectable({})
export class LoginService {
  public constructor(
    @InjectRepository(LoginEntity)
    private readonly _loginRepository: Repository<LoginEntity>
  ) {
    this._loginRepository.save({
      email: "example@gmail.com",
      password: "example"
    });
  }

  public async findOneBy(
    readLoginRequestQuery: ReadLoginRequestQuery
  ): Promise<ReadLoginResponse> {
    const result = await this._loginRepository.findOneBy({
      email: readLoginRequestQuery.email,
      password: readLoginRequestQuery.password
    });
    if (result) {
      return {
        email: result.email,
        id: result.id,
        message: "found",
        password: result.password
      };
    }
    return {
      email: "",
      id: -1,
      message: "not found",
      password: ""
    };
  }
}
