import React from 'react';

type ModalType = 'confirm' | 'alert';

interface ModalProps {
  title: string;
  message: string;
  type: ModalType;
  onClose: (confirmation: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ title, message, type, onClose }) => {
  return (
    <div className="modalOverlay" onClick={() => onClose(type === 'confirm' ? false : true)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalTitle">{title}</h2>
        <p className="modalMessage">{message}</p>

        <div className="modalButtons">
          {type === 'confirm' ? (
            <>
              <button className="modalButton modalCancelButton" onClick={() => onClose(false)}>
                Cancel
              </button>
              <button className="modalButton modalConfirmButton" onClick={() => onClose(true)}>
                Confirm
              </button>
            </>
          ) : (
            <button className="modalButton modalAcknowledgeButton" onClick={() => onClose(true)}>
              Okay
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
