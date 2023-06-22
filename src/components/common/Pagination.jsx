import { useState } from "react";
import Button from "./Button";
import { ArrowLeft, ArrowRight } from "react-feather";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  minPagesToShowFirstAndLast = 3,
}) => {
  const [inputPage, setInputPage] = useState(currentPage.toString());

  if (totalItems <= itemsPerPage || totalItems === 0) {
    return null;
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const showFirstAndLastButtons = totalPages >= minPagesToShowFirstAndLast;

  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
      setInputPage(page);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (value === "" || (value >= 1 && value <= totalPages)) {
      setInputPage(value);

      const validPage = value !== "" ? Number(value) : currentPage;
      handlePageChange(validPage);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const backButtonClassname = isFirstPage ? "invisible" : "visible";
  const forwardButtonClassname = isLastPage ? "invisible" : "visible";

  return (
    <div className="flex items-center space-x-2">
      {showFirstAndLastButtons && (
        <>
          <Button
            size="sm"
            className={backButtonClassname}
            onClick={() => handlePageChange(1)}
          >
            First
          </Button>
        </>
      )}
      <Button
        size="sm"
        className={backButtonClassname}
        icon={ArrowLeft}
        onClick={() => handlePageChange(currentPage - 1)}
        data-testid="back-button"
      />
      <div className="flex items-center px-2 space-x-2">
        <input
          type="number"
          className="w-16 px-2 py-1 border border-gray-300 rounded"
          value={inputPage}
          onChange={handleInputChange}
          min={1}
          max={totalPages}
          data-testid="pagination-input"
        />
        <span>/ {totalPages}</span>
      </div>
      <Button
        size="sm"
        className={forwardButtonClassname}
        icon={ArrowRight}
        onClick={() => handlePageChange(currentPage + 1)}
        data-testid="forward-button"
      />
      {showFirstAndLastButtons && (
        <Button
          size="sm"
          className={forwardButtonClassname}
          onClick={() => handlePageChange(totalPages)}
        >
          Last
        </Button>
      )}
    </div>
  );
};

export default Pagination;
