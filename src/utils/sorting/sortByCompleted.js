const sortByCompleted = (items, sortOrder) => {
  const sortOrders = {
    completed: (a, b) =>
      a.completed && !b.completed ? -1 : !a.completed && b.completed ? 1 : 0,
    uncompleted: (a, b) =>
      a.completed && !b.completed ? 1 : !a.completed && b.completed ? -1 : 0,
  };

  const sortFunction = sortOrders[sortOrder];
  return sortFunction ? [...items].sort(sortFunction) : items;
};

export const sortCompleted = (items) => {
  return sortByCompleted(items, "completed");
};

export const sortUncompleted = (items) => {
  return sortByCompleted(items, "uncompleted");
};
