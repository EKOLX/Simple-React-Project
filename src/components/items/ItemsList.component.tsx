import React from "react";

import { ItemInterface } from "../../models/items/Item.interface";
import { ItemComponent } from "./children/Item.component";
import { LoaderComponent } from "../shared/Loader.component";

type Props = {
  loading: boolean;
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
    const { loading, items } = this.props;

    let element;
    if (loading) {
      element = <LoaderComponent />;
    } else {
      element = (
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
      );
    }

    return (
      <div>
        <h3>Items:</h3>
        {element}
      </div>
    );
  }
}
