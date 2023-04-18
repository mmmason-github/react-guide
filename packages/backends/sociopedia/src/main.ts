import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";

@Module({})
export class RootModule {}

async function bootstrap() {
  const application = await NestFactory.create<NestExpressApplication>(
    RootModule
  );
  application.setGlobalPrefix("api");
  await application.listen(process.env.PORT || 3000);
}
bootstrap();
