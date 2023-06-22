import Modal from "./Modal";
import Button from "./Button";

const ConfirmModal = ({ message, onCancel, onConfirm }) => {
  return (
    <Modal onClose={onCancel}>
      <div className="p-4 bg-white rounded shadow">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <Button onClick={onCancel} data-testid="confirm-modal-cancel-button">
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            color="black"
            className="ml-2"
            data-testid="confirm-modal-confirm-button"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
