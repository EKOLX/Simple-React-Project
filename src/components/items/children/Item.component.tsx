import React from "react";

import { ItemInterface } from "../../../models/items/Item.interface";

type Props = {
  testId: string;
  item: ItemInterface;
  onItemSelect: (item: ItemInterface) => void;
};

export class ItemComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  get cssClass() {
    let css = "item";
    if (this.props.item.selected) {
      css += " selected";
    }
    return css.trim();
  }

  handleItemClick(item: ItemInterface) {
    this.props.onItemSelect(item);
  }

  render(): React.ReactNode {
    const { item } = this.props;
    const testId = this.props.testId || "not-set";

    return (
      <li
        data-testid={testId}
        className={this.cssClass}
        onClick={() => this.handleItemClick(item)}
      >
        <div className="selected-indicator">*</div>
        <div className="name">{item.name}</div>
      </li>
    );
  }
}
