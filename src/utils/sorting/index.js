import { sortNewest, sortOldest } from "./sortByDate";
import { sortByNameAZ, sortByNameZA } from "./sortByName";
import { sortCompleted, sortUncompleted } from "./sortByCompleted";

const sortingFunctions = {
  newest: sortNewest,
  oldest: sortOldest,
  "name-asc": sortByNameAZ,
  "name-desc": sortByNameZA,
  completed: sortCompleted,
  uncompleted: sortUncompleted,
};

export const sortItems = (items, sortType) => {
  const sortingFunction = sortingFunctions[sortType];

  return sortingFunction ? sortingFunction(items) : items;
};
