import { ItemsApiClientInterface } from "./items/ItemsApiClient.interface";

/**
 * @name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface;
}
