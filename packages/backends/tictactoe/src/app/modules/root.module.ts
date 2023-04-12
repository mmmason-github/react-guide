import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { environment } from "../../environments/environment.dev";
import { RootConfiguration } from "../configurations/root.configuration";
import { UserController } from "../controllers/user.controller";

@Module({
  controllers: [UserController],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [RootConfiguration.forRoot(environment)]
    })
  ],
  providers: []
})
export class RootModule {}
