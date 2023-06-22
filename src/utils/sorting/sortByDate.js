const sortByDate = (items, sortOrder) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return sortOrder === "newest"
      ? dateB - dateA
      : sortOrder === "oldest"
      ? dateA - dateB
      : 0;
  });
};

export const sortNewest = (items) => {
  return sortByDate(items, "newest");
};

export const sortOldest = (items) => {
  return sortByDate(items, "oldest");
};
