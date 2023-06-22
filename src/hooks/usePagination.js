import { useState, useEffect } from "react";

export const usePagination = (items, itemsPerPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newPaginatedItems = items.slice(startIndex, endIndex);
    setPaginatedItems(newPaginatedItems);
  }, [items, currentPage, itemsPerPage, setPaginatedItems]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, handlePageChange, paginatedItems };
};
