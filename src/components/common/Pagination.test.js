import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const onPageChange = jest.fn();
  const totalItems = 50;
  const itemsPerPage = 10;
  const currentPage = 1;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders pagination correctly", () => {
    const { getByText, getByTestId } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const firstButton = getByText("First");
    const previousButton = getByTestId("back-button");
    const nextButton = getByTestId("forward-button");
    const lastButton = getByText("Last");
    const input = getByTestId("pagination-input");

    expect(firstButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(getByText("/ 5")).toBeInTheDocument();
  });

  it("does not render first and last button if minPagesToShowFirstAndLast is less than totalPages", () => {
    const { queryByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={10}
      />
    );

    const firstButton = queryByText("First");
    const lastButton = queryByText("Last");

    expect(firstButton).not.toBeInTheDocument();
    expect(lastButton).not.toBeInTheDocument();
  });

  it("does not call onPageChange when clicking the first button on the first page", () => {
    const { getByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const firstButton = getByText("First");
    act(() => {
      userEvent.click(firstButton);
    });

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("does not call onPageChange when clicking the previous button on the first page", () => {
    const { getByTestId } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const previousButton = getByTestId("back-button");
    act(() => {
      userEvent.click(previousButton);
    });

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("calls onPageChange when clicking the next button", () => {
    const { getByTestId } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const nextButton = getByTestId("forward-button");
    act(() => {
      userEvent.click(nextButton);
    });

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange when clicking the last button", () => {
    const { getByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const lastButton = getByText("Last");
    act(() => {
      userEvent.click(lastButton);
    });

    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it("calls onPageChange with the input page value when changing the input", () => {
    const { getByTestId } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const input = getByTestId("pagination-input");
    const newPage = "3";

    act(() => {
      userEvent.clear(input);
      userEvent.type(input, newPage);
    });

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("does not call onPageChange with an invalid input page value", () => {
    const { getByTestId } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
        minPagesToShowFirstAndLast={3}
      />
    );

    const input = getByTestId("pagination-input");
    const invalidPage = "invalid";

    act(() => {
      userEvent.clear(input);
      userEvent.type(input, invalidPage);
    });

    expect(onPageChange).not.toHaveBeenCalled();
  });
});
