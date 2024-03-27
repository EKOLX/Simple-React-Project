import {
  ItemsApiClientInterface,
  ItemsApiClientModel,
  ItemsApiClientOptions,
} from "../../models/items";

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: "/path/to/real/api/end-point",
  },
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(
  options
);

export { itemsApiClient };
