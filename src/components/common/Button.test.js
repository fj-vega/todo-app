import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { ArrowLeft } from "react-feather";

describe("Button", () => {
  test("renders button with text", () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole("button", { name: /Hello/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the button with text and icon", () => {
    render(
      <Button icon={ArrowLeft} color="blue">
        Button Text
      </Button>
    );
    const button = screen.getByRole("button", { name: /Button Text/i });
    const icon = screen.getByTestId("icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /Click me/i });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom class to the button", () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole("button", { name: /Button/i });
    expect(button).toHaveClass("custom-class");
  });
});
