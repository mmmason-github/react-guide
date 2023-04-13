/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-useless-constructor */

import { Controller } from "@nestjs/common";

import { RootService } from "../services/root.service";

@Controller({ path: "/" })
export class RootController {
  constructor(private readonly _rootService: RootService) {}
}
