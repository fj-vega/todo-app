const sortitemsByName = (items, sortOrder) => {
  return [...items].sort((a, b) => {
    return sortOrder === "name-asc"
      ? a.name.localeCompare(b.name)
      : sortOrder === "name-desc"
      ? b.name.localeCompare(a.name)
      : 0;
  });
};

export const sortByNameAZ = (items) => {
  return sortitemsByName(items, "name-asc");
};

export const sortByNameZA = (items) => {
  return sortitemsByName(items, "name-desc");
};
