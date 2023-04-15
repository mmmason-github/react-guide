/* eslint-disable func-style */
/* eslint-disable new-cap */

import { Module } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";

@Module({
  controllers: [],
  exports: [],
  imports: [],
  providers: []
})
export class RootModule {}

async function bootstrap(): Promise<void> {
  const application = await NestFactory.create<NestExpressApplication>(
    RootModule
  );
  application.setGlobalPrefix("api");
  await application.listen(process.env.PORT || 3000);
}
bootstrap();
