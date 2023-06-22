import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

describe("Switch", () => {
  test("should render Switch component with initial state", () => {
    const { getByRole } = render(
      <Switch checked={false} disabled={false} onChange={() => {}} />
    );
    const switchInput = getByRole("checkbox");

    expect(switchInput).toBeInTheDocument();
    expect(switchInput).not.toBeChecked();
    expect(switchInput).not.toBeDisabled();
  });

  test("should have unique and matching id and htmlFor attributes", () => {
    render(<Switch checked={false} disabled={false} onChange={() => {}} />);
    const switchInput = screen.getByRole("checkbox");
    const switchLabel = document.querySelector(
      `label[for="${switchInput.id}"]`
    );

    const inputId = switchInput.getAttribute("id");
    const labelFor = switchLabel.getAttribute("for");

    expect(inputId).toBeTruthy();
    expect(labelFor).toBeTruthy();
    expect(inputId).toEqual(labelFor);
  });

  test("should call onChange callback when switch is toggled", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Switch checked={false} disabled={false} onChange={onChangeMock} />
    );
    const switchInput = getByRole("checkbox");

    userEvent.click(switchInput);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(switchInput).toBeInTheDocument();
  });

  test("should not call onChange callback when switch is disabled", () => {
    const onChangeMock = jest.fn();
    render(<Switch checked={false} disabled={true} onChange={onChangeMock} />);
    const switchInput = screen.getByRole("checkbox");

    userEvent.click(switchInput);

    expect(switchInput).toBeDisabled();
  });

  test("should apply correct class names when switch is checked", () => {
    const { getByRole } = render(
      <Switch checked={true} disabled={false} onChange={() => {}} />
    );
    const switchInput = getByRole("checkbox");
    const switchLabel = document.querySelector(
      `label[for="${switchInput.id}"]`
    );

    expect(switchInput).toHaveClass("left-4");
    expect(switchLabel).toHaveClass("bg-blue-500");
  });
});
