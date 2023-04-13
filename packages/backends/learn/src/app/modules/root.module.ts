/* eslint-disable new-cap */

import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { AuthModule } from "./auth.module";
import { ConfigModule } from "./config.module";
import { RootController } from "../controllers/root.controller";
import { RootService } from "../services/root.service";

@Module({
  controllers: [RootController],
  exports: [],
  imports: [
    AuthModule,
    ConfigModule,
    ServeStaticModule.forRoot({
      exclude: ["/api/(.*)"],
      renderPath: "/docs",
      rootPath: join(__dirname, "docs", "dist")
    })
  ],
  providers: [RootService]
})
export class RootModule {}
