import { filterItems } from "./filtering";
import { sortItems } from "./sorting";

export const applyFiltersAndSorting = ({ items, filterType, sortType }) => {
  const filteredItems = filterItems(items, filterType);
  const sortedItems = sortItems(filteredItems, sortType);

  return sortedItems;
};
