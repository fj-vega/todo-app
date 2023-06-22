import useTodosStore from "../../store/todos";

const TodosPerPageControl = () => {
  const todosPerPage = useTodosStore((state) => state.todosPerPage);
  const setTodosPerPage = useTodosStore((state) => state.setTodosPerPage);

  return (
    <div className="flex flex-col space-y-2 text-xs md:text-base">
      <label htmlFor="todos-per-page">Per page</label>
      <select
        id="todos-per-page"
        className="px-3 py-2 bg-white border border-gray-300 rounded-md"
        value={todosPerPage}
        onChange={(e) => setTodosPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>
  );
};

export default TodosPerPageControl;
