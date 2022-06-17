import {ParamsTypes} from "./yandex-types.sdk";
import {YandexDriveSdk} from "./drive/yandex-drive.sdk";

export class YandexSdk {
  constructor(
    protected params: ParamsTypes
  ) {}

  public get drive(){
    return new YandexDriveSdk(this.params)
  }
}