/* eslint-disable new-cap */

import { Module } from "@nestjs/common";

import { ConfigController } from "../controllers/config.controller";
import { ConfigService } from "../services/config.service";

@Module({
  controllers: [ConfigController],
  exports: [],
  imports: [],
  providers: [ConfigService]
})
export class ConfigModule {}
