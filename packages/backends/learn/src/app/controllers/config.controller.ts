/* eslint-disable new-cap */

import { Controller } from "@nestjs/common";

@Controller({ host: ["localhost"], path: ["/config"] })
export class ConfigController {}
