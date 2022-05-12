import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Input from "./input";

const placeholder = "input";

describe("Input", () => {
  afterEach(cleanup);

  it("handles change event", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="input"
        name="origin"
        value="UK"
        onChange={(name, e) => handleChange(name, e)}
      />
    );
    const element = getByPlaceholderText(placeholder);
    fireEvent.input(element, { target: { value: "42" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("displays placeholder", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="input"
        name="origin"
        value="UK"
        onChange={(name, e) => handleChange(name, e)}
      />
    );
    const element = getByPlaceholderText(placeholder);
    expect(element).toBeInTheDocument();
  });

  it("supports text type", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="input"
        name="origin"
        value="UK"
        type="text"
        onChange={(name, e) => handleChange(name, e)}
      />
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest("input")).toHaveAttribute("type", "text");
  });

  it("supports number type", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="input"
        name="origin"
        value="UK"
        type="number"
        onChange={(name, e) => handleChange(name, e)}
      />
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest("input")).toHaveAttribute("type", "number");
  });
});
