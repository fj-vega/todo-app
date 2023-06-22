import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmButton from "./ConfirmButton";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  document.body.removeChild(document.getElementById("modal-root"));
});

describe("ConfirmButton", () => {
  test("should open the modal when clicked and call onConfirm when confirmed", () => {
    const onConfirm = jest.fn();
    render(
      <ConfirmButton message="Are you sure?" onConfirm={onConfirm}>
        Confirm
      </ConfirmButton>
    );

    const confirmButton = screen.getByText("Confirm");
    act(() => {
      userEvent.click(confirmButton);
    });

    const modalOverlay = screen.getByTestId("modal-overlay");
    expect(modalOverlay).toBeInTheDocument();

    const confirmModal = screen.getByText("Are you sure?");
    expect(confirmModal).toBeInTheDocument();

    const confirmModalConfirmButton = screen.getByTestId(
      "confirm-modal-confirm-button"
    );
    act(() => {
      userEvent.click(confirmModalConfirmButton);
    });

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test("should open the modal when clicked and call onCancel when cancelled", () => {
    const onCancel = jest.fn();
    render(
      <ConfirmButton
        message="Are you sure?"
        onConfirm={() => {}}
        onCancel={onCancel}
      >
        Confirm
      </ConfirmButton>
    );

    const confirmButton = screen.getByText("Confirm");
    act(() => {
      userEvent.click(confirmButton);
    });

    const modalOverlay = screen.getByTestId("modal-overlay");
    expect(modalOverlay).toBeInTheDocument();

    const confirmModal = screen.getByText("Are you sure?");
    expect(confirmModal).toBeInTheDocument();

    const confirmModalCancelButton = screen.getByTestId(
      "confirm-modal-cancel-button"
    );
    act(() => {
      userEvent.click(confirmModalCancelButton);
    });

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
