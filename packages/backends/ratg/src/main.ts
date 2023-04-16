import { NestFactory } from "@nestjs/core";

import { Module } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";

@Module({})
export class RootModule {}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RootModule);
  app.setGlobalPrefix("api");
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
