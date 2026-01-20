const createDiv = () => {
  const newDiv = document.createElement('div') as HTMLDivElement;
  return newDiv;
};

const createLabel = () => {
  const newLabel = document.createElement('label') as HTMLLabelElement;
  return newLabel;
};

const createButton = () => {
  const newButton = document.createElement('button') as HTMLButtonElement;
  return newButton;
};

const createInput = (inputType: string = 'text', nameAttribute: string): HTMLInputElement => {
  const input = document.createElement('input') as HTMLInputElement;
  input.type = inputType;
  input.name = nameAttribute;

  return input;
};

const createDropdown = (options: string[], nameAttribute: string): HTMLSelectElement => {
  const select = document.createElement('select') as HTMLSelectElement;
  select.name = nameAttribute;
  for (let i = -1; i < options.length; i++) {
    const option = document.createElement('option') as HTMLOptionElement;
    if (i === -1) {
      option.textContent = '-- Select --';
      select.appendChild(option);
      continue;
    }
    option.textContent = options[i];
    select.appendChild(option);
  }

  return select;
};

const createRadioORCheckbox = (
  options: string[],
  inputName: string,
  inputType: string
): HTMLDivElement => {
  const radioContainer = createDiv() as HTMLDivElement;
  radioContainer.classList.add('radioContainer');

  for (let i = 0; i < options.length; i++) {
    const radioInput = createInput(inputType, '') as HTMLInputElement;
    radioInput.classList.add('radioCheckbox');
    radioInput.setAttribute('id', options[i] + `${inputName}`);
    radioInput.name = inputName;
    radioInput.hidden = true;

    const label = document.createElement('label') as HTMLLabelElement;
    label.setAttribute('for', radioInput.id);
    label.textContent = options[i];
    label.classList.add('radioCheckboxText');

    radioContainer.append(radioInput, label);
  }

  return radioContainer;
};

export { createLabel, createDiv, createButton, createInput, createDropdown, createRadioORCheckbox };
