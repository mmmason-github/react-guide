import { Body, Controller, Post } from "@nestjs/common";

@Controller({
  path: "user"
})
export class UserController {
  @Post(["/create"])
  public async Create(@Body() data: unknown): Promise<boolean> {
    console.log(data);
    return true;
  }
}
