/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable require-await */

import { Controller } from "@nestjs/common";

@Controller({ host: ["localhost"], path: ["/task"] })
export class TaskController {}
