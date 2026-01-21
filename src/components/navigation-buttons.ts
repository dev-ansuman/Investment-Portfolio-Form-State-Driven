import { nextPage, previousPage } from '../services/navigation';
import { createButton, createDiv } from './input';

const Navigation = (): HTMLDivElement => {
  const navigationButtonDiv = createDiv() as HTMLDivElement;
  navigationButtonDiv.classList.add('buttonContainer');

  const previousButton = createButton() as HTMLButtonElement;
  previousButton.textContent = 'Previous';
  previousButton.classList.add('navigationButton');
  previousButton.id = 'previousButton';
  previousButton.disabled = true;

  const continueButton = createButton() as HTMLButtonElement;
  continueButton.textContent = 'Continue';
  continueButton.classList.add('navigationButton');
  continueButton.id = 'continueButton';

  const submitButton = createButton() as HTMLButtonElement;
  submitButton.textContent = 'Submit';
  submitButton.classList.add('navigationButton');
  submitButton.id = 'submitButton';
  submitButton.style.display = 'none';

  previousButton.addEventListener('click', () => {
    previousPage();
  });

  continueButton.addEventListener('click', () => {
    nextPage();
  });

  // submitButton;

  navigationButtonDiv.append(previousButton, continueButton, submitButton);
  return navigationButtonDiv;
};

export { Navigation };
