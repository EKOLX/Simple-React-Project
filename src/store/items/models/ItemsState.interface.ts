import { ItemInterface } from "../../../models/items/Item.interface";

/**
 * @name ItemsStateInterface
 * @description Interface represnets Items state
 */
export interface ItemsStateInterface {
  loading: boolean;
  items: ItemInterface[];
}
