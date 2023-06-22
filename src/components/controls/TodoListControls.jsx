import DeleteAllTodosControl from "./DeleteAllTodosControl";
import AddTodoControl from "./AddTodoControl";
import FilterTodosControl from "./FilterTodosControl";
import SortTodosControl from "./SortTodosControl";
import TodosPerPageControl from "./TodosPerPageControl";

const TodoListControls = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 md:flex-row md:items-end">
        <div className="flex items-center justify-center space-x-4 md:order-last md:ml-16">
          <DeleteAllTodosControl />
          <AddTodoControl />
        </div>
        <div className="flex items-center justify-center space-x-2 md:space-x-4 md:order-first">
          <FilterTodosControl />
          <SortTodosControl />
          <TodosPerPageControl />
        </div>
      </div>
    </>
  );
};

export default TodoListControls;
