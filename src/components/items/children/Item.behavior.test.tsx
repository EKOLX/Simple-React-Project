import { render, fireEvent, prettyDOM } from "@testing-library/react";

import { ItemInterface } from "../../../models/items/Item.interface";
import { ItemComponent } from "./Item.component";

describe("Item.component: behavior", () => {
  // test our component click event
  it("invokes onItemSelect handler on click event as expected", () => {
    const testId = "unit-test-item";
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    };

    // create a spy function
    const onItemSelect = vitest.fn();

    // render component
    const { container } = render(
      <ItemComponent testId={testId} item={item} onItemSelect={onItemSelect} />
    );
    const liElement = container.firstChild as HTMLElement;
    // fire click
    fireEvent.click(liElement);

    expect(onItemSelect).toHaveBeenCalledOnce();
  });
});
