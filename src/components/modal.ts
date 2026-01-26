import { createButton } from './Ui/button';
import { createDiv } from './Ui/div';
import { createHeading } from './Ui/heading';
import { createParagraph } from './Ui/paragraph';

export const showModal = (
  title: string,
  message: string,
  type: 'confirm' | 'alert',
  action: (confirmation: boolean) => void
) => {
  const overlay = createDiv() as HTMLElement;
  overlay.className = 'modalOverlay';

  const modal = createDiv() as HTMLElement;
  modal.className = 'modal';

  const modalTitle = createHeading(2);
  modalTitle.className = 'modalTitle';
  modalTitle.textContent = title;

  const modalMessage = createParagraph() as HTMLParagraphElement;
  modalMessage.className = 'modalMessage';
  modalMessage.textContent = message;

  const modalButtonContainer = createDiv() as HTMLDivElement;
  modalButtonContainer.className = 'modalButtons';

  const closeModal = (confirmation: boolean) => {
    overlay.remove();
    action(confirmation);
  };

  if (type === 'confirm') {
    const cancelButton = createButton() as HTMLButtonElement;
    cancelButton.className = 'modalButton modalCancelButton';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      closeModal(false);
    });

    const confirmButton = createButton() as HTMLButtonElement;
    confirmButton.className = 'modalButton modalConfirmButton';
    confirmButton.textContent = 'Confirm';
    confirmButton.addEventListener('click', () => {
      closeModal(true);
    });

    modalButtonContainer.append(cancelButton, confirmButton);
  } else {
    const acknowledgeButton = createButton() as HTMLButtonElement;
    acknowledgeButton.className = 'modalButton modalAcknowledgeButton';
    acknowledgeButton.textContent = 'Okay';
    acknowledgeButton.addEventListener('click', () => {});

    modalButtonContainer.appendChild(acknowledgeButton);
  }

  modal.append(modalTitle, modalMessage, modalButtonContainer);
  overlay.append(modal);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal(type === 'confirm' ? false : true);
    }
  });

  document.body.append(overlay);
  console.log("This is the modal and it's working fine");
};
