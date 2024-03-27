import { ItemInterface } from "../../../models/items/Item.interface";

/**
 * @name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>;
}
