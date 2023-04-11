import { Configuration } from "../interfaces/configurations.interface";
import { Environment } from "../interfaces/environment.interface";

export class RootConfiguration {
  public static forRoot(environment: Environment): Configuration {
    if (this._validate() === true) return () => environment;
    else return null;
  }

  private static _validate(): boolean {
    return true;
  }
}
