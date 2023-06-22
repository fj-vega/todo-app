import { useState } from "react";
import NewTodoForm from "../forms/NewTodoForm";
import Button from "../common/Button";
import { Plus } from "react-feather";

const AddTodoControl = () => {
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  return (
    <>
      <Button
        color="black"
        icon={Plus}
        hideTextOnMobile={true}
        onClick={() => setShowNewTodoForm(true)}
      >
        Add
      </Button>
      {showNewTodoForm && (
        <NewTodoForm onClose={() => setShowNewTodoForm(false)} />
      )}
    </>
  );
};

export default AddTodoControl;
