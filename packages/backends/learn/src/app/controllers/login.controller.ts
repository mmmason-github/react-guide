/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable require-await */

import { Controller, Get, Query } from "@nestjs/common";

import { LoginService } from "../services/login.service";
import { ReadLoginRequestQuery } from "../interfaces/request/login.request";
import { ReadLoginResponse } from "../interfaces/response/login.response";

@Controller({ host: ["localhost"], path: ["/login"] })
export class LoginController {
  public constructor(private readonly _loginService: LoginService) {}

  @Get(["?"])
  public async findOneBy(
    @Query() readLoginRequestQuery: ReadLoginRequestQuery
  ): Promise<ReadLoginResponse> {
    return this._loginService.findOneBy(readLoginRequestQuery);
  }
}
