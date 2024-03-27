import { ItemsStoreInterface } from "../../items";

/**
 * @name RootStoreInterface
 * @description Interface represents our root state manager (store)
 */
export interface RootStoreInterface {
  itemsStore: ItemsStoreInterface;
}
