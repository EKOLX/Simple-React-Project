import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemsStateInterface } from "./models";
import { ItemInterface } from "../../models/items/Item.interface";

const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: [],
};

export const itemsStoreSlice = createSlice({
  name: "itemsStoreSlice",
  initialState: initialItemsState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setItems: (state, action: PayloadAction<ItemInterface[]>) => {
      state.items = action.payload || [];
      state.loading = false;
    },

    setItemSelected: (state, action: PayloadAction<ItemInterface>) => {
      const item = action.payload;
      const found = state.items.find(
        (it) => it.id === item.id
      ) as ItemInterface;
      found.selected = !found.selected;
    },
  },
});
