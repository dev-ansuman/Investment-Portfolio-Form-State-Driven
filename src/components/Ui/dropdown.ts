export const createDropdown = (
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
