/* eslint-disable new-cap */
/* eslint-disable no-useless-constructor */

import { Controller } from "@nestjs/common";

import { ConfigService } from "../services/config.service";

@Controller({ path: "/config" })
export class ConfigController {
  constructor(private readonly _configService: ConfigService) {}
}
