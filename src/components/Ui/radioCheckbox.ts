import { createDiv } from './div.ts';
import { createInput } from './input.ts';

export const createRadioORCheckbox = (
  options: string[],
  inputName: string,
  inputType: string,
  className: string,
  hiddenProperty: boolean
): HTMLDivElement => {
  const radioContainer = createDiv() as HTMLDivElement;
  radioContainer.classList.add('radioContainer');

  for (let i = 0; i < options.length; i++) {
    const radioInput = createInput(inputType, '', '') as HTMLInputElement;
    radioInput.classList.add('radioCheckbox');
    radioInput.setAttribute('id', options[i] + `${inputName}`);
    radioInput.name = inputName;
    radioInput.hidden = hiddenProperty;

    const label = document.createElement('label') as HTMLLabelElement;
    label.setAttribute('for', radioInput.id);
    label.textContent = options[i];
    // const someClass = 'radioCheckboxText'
    if (className) {
      label.classList.add(className);
    }

    radioContainer.append(radioInput, label);
  }

  return radioContainer;
};
