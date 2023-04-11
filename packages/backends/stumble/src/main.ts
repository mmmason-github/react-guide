import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { RootModule } from "./app/modules/root.module";

async function bootstrap(): Promise<void> {
  const application = await NestFactory.create<NestExpressApplication>(
    RootModule
  );
  application.setGlobalPrefix("api");
  await application.listen(process.env.PORT || 3000);
}
bootstrap();
