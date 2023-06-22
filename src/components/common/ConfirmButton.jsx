import { useState } from "react";
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";

const ConfirmButton = ({
  message,
  onConfirm,
  onCancel = () => {},
  children,
  ...props
}) => {
  const [isModalOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} {...props}>
        {children}
      </Button>

      {isModalOpen && (
        <ConfirmModal
          message={message}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ConfirmButton;
