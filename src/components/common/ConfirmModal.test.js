import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import ConfirmModal from "./ConfirmModal";

describe("ConfirmModal", () => {
  let modalRoot;

  beforeEach(() => {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
    modalRoot = null;
  });

  it("calls onConfirm when Confirm button is clicked", () => {
    const onConfirm = jest.fn();
    render(<ConfirmModal message="Are you sure?" onConfirm={onConfirm} />);

    const confirmButton = screen.getByText("Confirm");

    act(() => {
      userEvent.click(confirmButton);
    });

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onCancel when Cancel button is clicked", () => {
    const onCancel = jest.fn();
    render(
      <ConfirmModal
        message="Are you sure?"
        onConfirm={() => {}}
        onCancel={onCancel}
      />
    );

    const cancelButton = screen.getByText("Cancel");

    act(() => {
      userEvent.click(cancelButton);
    });

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("closes the modal when overlay is clicked", () => {
    const onCancel = jest.fn();
    render(
      <ConfirmModal
        message="Are you sure?"
        onConfirm={() => {}}
        onCancel={onCancel}
      />
    );

    const modalOverlay = screen.getByTestId("modal-overlay");

    act(() => {
      userEvent.click(modalOverlay);
    });

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
