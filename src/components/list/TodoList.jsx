import { useMemo } from "react";
import useTodosStore from "../../store/todos";
import TodoItem from "./TodoItem";
import NoTodosToDisplay from "./NoTodosToDisplay";
import Pagination from "../common/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { applyFiltersAndSorting } from "../../utils/applyFiltersAndSorting";

const TodoList = () => {
  const todos = useTodosStore((state) => state.todos);
  const filterType = useTodosStore((state) => state.filterType);
  const sortType = useTodosStore((state) => state.sortType);
  const todosPerPage = useTodosStore((state) => state.todosPerPage);

  const filteredAndSortedTodos = useMemo(
    () =>
      applyFiltersAndSorting({
        items: todos,
        filterType,
        sortType,
      }),
    [todos, filterType, sortType]
  );

  const {
    currentPage,
    handlePageChange,
    paginatedItems: todosToDisplay,
  } = usePagination(filteredAndSortedTodos, todosPerPage);

  if (!filteredAndSortedTodos.length) return <NoTodosToDisplay />;

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      <ul className="flex flex-col w-full space-y-4 md:space-y-0">
        {todosToDisplay.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <Pagination
        totalItems={filteredAndSortedTodos.length}
        itemsPerPage={todosPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TodoList;
