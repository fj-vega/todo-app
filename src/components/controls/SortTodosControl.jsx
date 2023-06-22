import useTodosStore from "../../store/todos";

const SortTodosControl = () => {
  const sortType = useTodosStore((state) => state.sortType);
  const setSortType = useTodosStore((state) => state.setSortType);

  return (
    <div className="flex flex-col space-y-2 text-xs md:text-base">
      <label htmlFor="sort">Sort by</label>
      <select
        id="sort"
        className="px-3 py-2 bg-white border border-gray-300 rounded-md md:w-auto"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default SortTodosControl;
