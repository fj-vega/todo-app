import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders the label and input element correctly", () => {
    const label = "Test Label";
    const inputProps = {
      id: "test-input",
      placeholder: "Test Placeholder",
    };

    render(<Input label={label} {...inputProps} />);

    // Verify label
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    // Verify input element
    const inputElement = screen.getByPlaceholderText(inputProps.placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", inputProps.id);
    expect(inputElement).toHaveClass(
      "border",
      "border-gray-300",
      "px-3",
      "py-2",
      "rounded-md"
    );
  });
});
