import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

@Module({
  imports: []
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
