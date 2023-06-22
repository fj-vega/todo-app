import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  document.body.removeChild(document.getElementById("modal-root"));
});

describe("Modal", () => {
  it("renders the modal content", () => {
    const onCloseMock = jest.fn();

    render(
      <Modal onClose={onCloseMock}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContent = screen.getByTestId("modal-content");
    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toHaveTextContent("Modal Content");
  });

  it("calls the onClose function when the overlay is clicked", () => {
    const onCloseMock = jest.fn();
    render(<Modal onClose={onCloseMock} />);

    const overlay = screen.getByTestId("modal-overlay");
    userEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
