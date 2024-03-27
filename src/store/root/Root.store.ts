import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { itemsStoreSlice, useItemsActions, useItemsGetters } from "../items";
import { RootStoreInterface } from "./models";

export const rootStore = configureStore({
  reducer: {
    itemsState: itemsStoreSlice.reducer,
  },
});

export type RootStateInterface = ReturnType<typeof rootStore.getState>;

export function useAppStore(): RootStoreInterface {
  const commit = useDispatch();

  return {
    itemsStore: {
      actions: useItemsActions(commit),
      getters: useItemsGetters(),
    },
  };
}

type IAppState = ReturnType<typeof rootStore.getState>;

export function getAppState(): IAppState {
  const appState = rootStore.getState();
  return {
    ...appState,
  };
}
