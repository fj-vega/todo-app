import useTodosStore from "../../store/todos";
import { useState } from "react";
import classNames from "classnames";
import Switch from "../common/Switch";
import EditTodoForm from "../forms/EditTodoForm";
import Button from "../common/Button";
import ConfirmButton from "../common/ConfirmButton";
import { Edit, Trash } from "react-feather";
import { createReadableDate } from "../../utils/createReadableDate";
import chekMarkSvg from "/img/check-mark.svg";

const TodoItem = ({ todo }) => {
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);

  const [showEditTodoForm, setShowEditTodoForm] = useState(false);

  const containerClasses = classNames(
    "group relative flex flex-wrap md:flex-nowrap items-center content-center gap-y-4 py-3 px-6 hover:bg-gray-200 rounded border border-solid border-gray-500 rounded-lg md:border-none",
    todo.completed && "opacity-50"
  );

  const readableDate = createReadableDate(todo.createdAt);

  return (
    <>
      <li className={containerClasses}>
        <div className="relative flex items-center">
          <Switch
            type="checkbox"
            className="ml-auto md:ml-[unset] visible md:invisible group-hover:visible"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          {todo.completed && (
            <img
              src={chekMarkSvg}
              alt="Check mark"
              className="absolute visible hidden w-6 h-6 md:block md:group-hover:invisible left-2"
            />
          )}
        </div>

        <p className="flex-shrink-0 mx-4 text-gray-500">{readableDate}</p>

        <p className="flex-shrink-0 order-first mx-4 md:order-none">
          {todo.name}
        </p>

        <div className="flex items-center visible ml-auto space-x-2 md:invisible group-hover:visible">
          <ConfirmButton
            size="sm"
            icon={Trash}
            hideTextOnMobile={true}
            message="Are you sure you want to delete this todo?"
            onConfirm={() => deleteTodo(todo.id)}
          >
            Delete
          </ConfirmButton>

          <Button
            color="black"
            size="sm"
            icon={Edit}
            hideTextOnMobile={true}
            onClick={() => setShowEditTodoForm(true)}
          >
            Edit
          </Button>
        </div>
      </li>
      {showEditTodoForm && (
        <EditTodoForm todo={todo} onClose={() => setShowEditTodoForm(false)} />
      )}
    </>
  );
};

export default TodoItem;
