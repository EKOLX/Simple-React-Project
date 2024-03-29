import {
  HttpRequestParamsInterface,
  HttpRequestType,
  httpClientInstance,
} from "@/http-client";
import { ItemInterface } from "../../../models/items/Item.interface";
import {
  ItemsApiClientEndpoints,
  ItemsApiClientOptions,
} from "./ItemApiClientOptions.interface";
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay,
    };

    return httpClientInstance().request<ItemInterface[]>(requestParameters);
  }
}
