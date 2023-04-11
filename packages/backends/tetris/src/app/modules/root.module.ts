import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { environment } from "../../environments/environment.dev";
import { RootConfiguration } from "../configurations/root.configuration";

@Module({
  controllers: [],
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
