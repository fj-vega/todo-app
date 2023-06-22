import { filterByCompleted, filterByUncompleted } from "./filterByStatus";

const filterFunctions = {
  completed: filterByCompleted,
  uncompleted: filterByUncompleted,
};

export const filterItems = (items, filterType) => {
  const filterFunction = filterFunctions[filterType];

  return filterFunction ? filterFunction(items) : items;
};
