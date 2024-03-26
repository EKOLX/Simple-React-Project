import { render, screen, prettyDOM } from "@testing-library/react";

import { ItemInterface } from "../../../models/items/Item.interface";
import { ItemComponent } from "./Item.component";

describe("Item.component: rendering", () => {
  it("renders an Item text correctly", () => {
    const testId = "unit-test-item";
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    };

    // render component
    render(
      <ItemComponent testId={testId} item={item} onItemSelect={() => {}} />
    );
    const liElement = screen.getByTestId(testId);

    expect(liElement).not.toBeNull();

    const children = liElement.children;
    expect(children).toHaveLength(2);
    expect(children.item(1)?.innerHTML).toContain(item.name);
  });

  it("renders an Item indicator correctly", () => {
    const testId = "unit-test-item";
    const item: ItemInterface = {
      id: 2,
      name: "Unit test item 2",
      selected: false,
    };

    // render component
    render(
      <ItemComponent testId={testId} item={item} onItemSelect={() => {}} />
    );
    const liElement = screen.getByTestId(testId);

    expect(liElement).not.toBeNull();

    const children = liElement.children;
    expect(children).toHaveLength(2);
    expect(children.item(0)?.innerHTML).toContain("*");
  });

  it("has expected css class when selected is true", () => {
    const testId = "unit-test-item";
    const item: ItemInterface = {
      id: 3,
      name: "Unit test item 3",
      selected: true,
    };

    // render component
    render(
      <ItemComponent testId={testId} item={item} onItemSelect={() => {}} />
    );
    const liElement = screen.getByTestId(testId);

    expect(liElement).not.toBeNull();

    // check that the element class attribute has the expected value
    expect(liElement.className).toContain("selected");
  });

  it("has expected css class when selected is false", () => {
    const testId = "unit-test-item";
    const item: ItemInterface = {
      id: 4,
      name: "Unit test item 4",
      selected: false,
    };

    // render component
    render(
      <ItemComponent testId={testId} item={item} onItemSelect={() => {}} />
    );
    const liElement = screen.getByTestId(testId);

    expect(liElement).not.toBeNull();

    // check that the element class attribute does not contain 'selected'
    expect(liElement.className).not.toContain("selected");
  });
});
