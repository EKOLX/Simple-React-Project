import { useState } from "react";

import { ItemsListComponent } from "./components/items/ItemsList.component";
import { ItemInterface } from "./models/items/Item.interface";
import "./App.css";

function App() {
  const [items, setItems] = useState<ItemInterface[]>([
    {
      id: 1,
      name: "Item 1",
      selected: true,
    },
    {
      id: 2,
      name: "Item 2",
      selected: false,
    },
    {
      id: 3,
      name: "Item 3",
      selected: false,
    },
  ]);

  const onItemSelect = (item: ItemInterface) => {
    const updatedItems = [...items];
    const found = updatedItems.find((it) => it.id === item.id) as ItemInterface;
    found.selected = !found.selected;
    setItems(updatedItems);
    console.log("App.tsx: onItemSelect", found.id, found.selected);
  };

  return (
    <div>
      <ItemsListComponent items={items} onItemSelect={onItemSelect} />
    </div>
  );
}

export default App;
