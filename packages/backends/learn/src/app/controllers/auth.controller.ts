/* eslint-disable new-cap */
/* eslint-disable no-useless-constructor */

import { Controller } from "@nestjs/common";

import { AuthService } from "../services/auth.service";

@Controller({ path: "/auth" })
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
}
