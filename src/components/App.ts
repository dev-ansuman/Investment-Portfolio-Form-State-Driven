import { formScreen } from './Form/Form.ts';
import { createDiv } from './input.ts';
import { Navigation } from './navigation-buttons.ts';
import { TableWrapper } from './table.ts';

export function renderApp(): void {
  const root = document.getElementById('app') as HTMLDivElement;

  if (!root) {
    throw new Error('Root element #app not found');
  }

  root.innerHTML = '';

  const formContainer = createDiv() as HTMLDivElement;
  formContainer.className = 'formContainer';

  formContainer.appendChild(formScreen());
  formContainer.appendChild(Navigation());

  const tableContainer = createDiv() as HTMLDivElement;
  tableContainer.className = 'tableContainer';
  tableContainer.appendChild(TableWrapper());

  root.append(formContainer, tableContainer);
  root.style.display = 'flex';
}
