const createDiv = (): HTMLDivElement => {
  const newDiv = document.createElement('div') as HTMLDivElement;
  return newDiv;
};

const createHeader = (): HTMLHeadElement => {
  const header = document.createElement('header') as HTMLHeadElement;
  return header;
};

const createLabel = (): HTMLLabelElement => {
  const newLabel = document.createElement('label') as HTMLLabelElement;
  return newLabel;
};

const createButton = (): HTMLButtonElement => {
  const newButton = document.createElement('button') as HTMLButtonElement;
  return newButton;
};

const createTable = (): HTMLTableElement => {
  const newTable = document.createElement('table') as HTMLTableElement;
  return newTable;
};

const createTableRow = (): HTMLTableRowElement => {
  const newTableRow = document.createElement('tr') as HTMLTableRowElement;
  return newTableRow;
};

const createTableHeader = (): HTMLTableCellElement => {
  const newTableHeader = document.createElement('th') as HTMLTableCellElement;
  return newTableHeader;
};

const createTableCell = (): HTMLTableCellElement => {
  const newTableCell = document.createElement('td') as HTMLTableCellElement;
  return newTableCell;
};

const createInput = (inputType: string = 'text', nameAttribute: string): HTMLInputElement => {
  const input = document.createElement('input') as HTMLInputElement;
  input.type = inputType;
  input.name = nameAttribute;

  return input;
};

const createNav = (): HTMLElement => {
  const newNav = document.createElement('nav') as HTMLElement;
  return newNav;
};

const createImg = (): HTMLImageElement => {
  const newImg = document.createElement('img') as HTMLImageElement;
  return newImg;
};

const createTextarea = (
  textareaPlaceholder: string,
  textareaRows: number,
  textareaName: string
): HTMLTextAreaElement => {
  const newtextarea = document.createElement('textarea') as HTMLTextAreaElement;
  newtextarea.placeholder = textareaPlaceholder;
  newtextarea.rows = textareaRows;
  newtextarea.name = textareaName;
  return newtextarea;
};

const createDropdown = (
  options: string[],
  values: string[],
  nameAttribute: string
): HTMLSelectElement => {
  const select = document.createElement('select') as HTMLSelectElement;
  select.name = nameAttribute;
  for (let i = -1; i < options.length; i++) {
    const option = document.createElement('option') as HTMLOptionElement;
    if (i === -1) {
      option.textContent = '-- Select --';
      option.value = '';
      select.appendChild(option);
      continue;
    }
    option.textContent = options[i];
    option.value = values[i];
    select.appendChild(option);
  }

  return select;
};

const createRadioORCheckbox = (
  options: string[],
  inputName: string,
  inputType: string,
  className: string,
  hiddenProperty: boolean
): HTMLDivElement => {
  const radioContainer = createDiv() as HTMLDivElement;
  radioContainer.classList.add('radioContainer');

  for (let i = 0; i < options.length; i++) {
    const radioInput = createInput(inputType, '') as HTMLInputElement;
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

export {
  createLabel,
  createDiv,
  createHeader,
  createButton,
  createTable,
  createTableRow,
  createTableHeader,
  createTableCell,
  createTextarea,
  createInput,
  createNav,
  createImg,
  createDropdown,
  createRadioORCheckbox,
};
