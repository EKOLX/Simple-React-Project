import { ApiClientInterface } from "../models/ApiClient.interface";
import { itemsApiClient } from "./items";

const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient,
};

export { apiLiveClient };
