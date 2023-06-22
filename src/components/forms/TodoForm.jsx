import { useState } from "react";
import { createTodo } from "../../utils/createTodo";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

const TodoForm = ({ todo = {}, onEditTodo, onAddTodo, onClose = () => {} }) => {
  const [newName, setNewName] = useState(todo.name ?? "");
  const isValid = newName.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.id) {
      onEditTodo(todo.id, newName);
    } else {
      const newTodo = createTodo(newName);
      onAddTodo(newTodo);
    }
    setNewName("");
    onClose();
  };
  
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col p-6 space-y-4" onSubmit={handleSubmit}>
        <Input
          label={todo.id ? "Edit Todo" : "New Todo"}
          type="text"
          value={newName}
          autoFocus
          onChange={(e) => setNewName(e.target.value)}
        />

        <div className="flex justify-end space-x-2">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button color="black" type="submit" disabled={!isValid}>
            {todo.id ? "Edit" : "Add"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TodoForm;
