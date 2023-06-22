import useTodosStore from "../../store/todos";
import TodoForm from "./TodoForm";

const NewTodoForm = ({ onClose }) => {
  const addTodo = useTodosStore((state) => state.addTodo);

  return <TodoForm onAddTodo={addTodo} onClose={onClose} />;
};

export default NewTodoForm;
