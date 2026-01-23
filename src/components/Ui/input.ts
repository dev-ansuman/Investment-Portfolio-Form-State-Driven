export const createInput = (
  inputType: string = 'text',
  nameAttribute: string,
  PLACEHOLDER: string
): HTMLInputElement => {
  const input = document.createElement('input') as HTMLInputElement;
  input.type = inputType;
  input.name = nameAttribute;
  input.placeholder = PLACEHOLDER;
  return input;
};
