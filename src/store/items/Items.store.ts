import { Dispatch } from "react";
import { useSelector } from "react-redux";

import { itemsStoreSlice } from "./Items.slice";
import { ItemInterface } from "../../models/items/Item.interface";
import { RootStateInterface } from "../root";
import { apiClient } from "../../api-client";

/**
 * @name useItemsActions
 * @description
 * Actions hook that allows us to invoke the Items store actions from our components
 */
export function useItemsActions(commit: Dispatch<any>) {
  const mutations = itemsStoreSlice.actions;

  const actions = {
    loadItems: async () => {
      commit(mutations.setLoading(true));

      const data = await apiClient.items.fetchItems();
      commit(mutations.setItems(data));
    },
    toggleItemSelected: async (item: ItemInterface) => {
      console.log("ItemStore: action: toggleItemSelected", item);
      commit(mutations.setItemSelected(item));
    },
  };

  return actions;
}

// hook to allows us to consume read-only state properties from our components
export function useItemsGetters() {
  return {
    loading: useSelector((s: RootStateInterface) => s.itemsState.loading),
    items: useSelector((s: RootStateInterface) => s.itemsState.items),
  };
}

/**
 * @name ItemsStoreInterface
 * @description Interface represents Items store module
 */
export interface ItemsStoreInterface {
  actions: ReturnType<typeof useItemsActions>;
  getters: ReturnType<typeof useItemsGetters>;
}
