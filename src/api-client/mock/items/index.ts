import {
  ItemsApiClientInterface,
  ItemsApiClientModel,
  ItemsApiClientOptions,
} from "../../models/items";

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: "/static/mock-data/items/items.json",
    // fetchItems: "/jsonserver/items",
  },
  mockDelay: 1000,
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(
  options
);

export { itemsApiClient };
