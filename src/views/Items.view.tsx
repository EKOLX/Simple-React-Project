import { useEffect } from "react";

import { ItemInterface } from "../models/items/Item.interface";
import { ItemsListComponent } from "../components/items/ItemsList.component";
import { useAppStore } from "../store";

function ItemsView() {
  const { itemsStore } = useAppStore();
  const { loading, items } = itemsStore.getters;
  const { loadItems, toggleItemSelected } = itemsStore.actions;

  const onItemSelect = (item: ItemInterface) => {
    toggleItemSelected(item);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <ItemsListComponent
        loading={loading}
        items={items}
        onItemSelect={onItemSelect}
      />
    </div>
  );
}

export default ItemsView;
