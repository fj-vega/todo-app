const filterByStatus = (items, filterType) => {
  const filterFunctions = {
    completed: (item) => item.completed,
    uncompleted: (item) => !item.completed,
  };

  const filterFunction = filterFunctions[filterType];
  return filterFunction ? items.filter(filterFunction) : items;
};

export const filterByCompleted = (items) => {
  return filterByStatus(items, "completed");
};

export const filterByUncompleted = (items) => {
  return filterByStatus(items, "uncompleted");
};
