import useTodosStore from "../../store/todos";

const FilterTodosControl = () => {
  const filterType = useTodosStore((state) => state.filterType);
  const setFilterType = useTodosStore((state) => state.setFilterType);

  return (
    <div className="flex flex-col space-y-2 text-xs md:text-base">
      <label htmlFor="filter">Show</label>
      <select
        id="filter"
        className="px-3 py-2 bg-white border border-gray-300 rounded-md"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FilterTodosControl;
