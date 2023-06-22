import useTodosStore from "../../store/todos";
import TodoForm from "./TodoForm";

const EditTodoForm = ({ todo, onClose }) => {
  const editTodo = useTodosStore((state) => state.editTodo);

  const editTodoHandler = (id, name) => {
    editTodo(id, name);
    onClose();
  };

  return (
    <TodoForm todo={todo} onEditTodo={editTodoHandler} onClose={onClose} />
  );
};

export default EditTodoForm;
