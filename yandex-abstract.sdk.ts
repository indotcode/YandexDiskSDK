import {ParamsTypes} from "./yandex-types.sdk";
import axios, {AxiosInstance} from "axios";

export abstract class YandexAbstractSdk{
  protected url: string

  protected api: AxiosInstance;

  protected headers = {
    "Authorization": `OAuth ${this.params.oauth_token}`
  }

  public constructor(
    protected readonly params: ParamsTypes,
  ) {
    this.api = axios.create({
      headers: this.headers,
    });
  }
}