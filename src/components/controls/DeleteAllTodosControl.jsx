import useTodosStore from "../../store/todos";
import ConfirmButton from "../common/ConfirmButton";
import { Trash } from "react-feather";

const DeleteAllTodosControl = () => {
  const todos = useTodosStore((state) => state.todos);
  const deleteAllTodos = useTodosStore((state) => state.deleteAllTodos);

  if (todos.length === 0) return null;

  return (
    <ConfirmButton
      message="Are you sure you want to delete all todos?"
      onConfirm={deleteAllTodos}
      icon={Trash}
      hideTextOnMobile={true}
    >
      Delete all
    </ConfirmButton>
  );
};

export default DeleteAllTodosControl;
