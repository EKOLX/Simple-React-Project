import React from "react";

import { ItemInterface } from "../../models/items/Item.interface";
import { ItemComponent } from "./children/Item.component";

type Props = {
  items: ItemInterface[];
  onItemSelect: (item: ItemInterface) => void;
};
export class ItemsListComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleItemClick(item: ItemInterface) {
    this.props.onItemSelect(item);
  }

  render(): React.ReactNode {
    const { items } = this.props;

    return (
      <div>
        <h3>Items:</h3>
        <ul>
          {items.map((item: ItemInterface) => (
            <ItemComponent
              testId={`item-${item.id}`}
              key={item.id}
              item={item}
              onItemSelect={() => this.handleItemClick(item)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
