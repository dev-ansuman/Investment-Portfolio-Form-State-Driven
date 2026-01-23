import { formScreen } from './Form/Form.ts';
import { createDiv } from './Ui/div.ts';
import { Navigation } from './Form/navigation-buttons.ts';
import { TableContainer } from './table.ts';
import { ProjectHeading } from './heading.ts';

export function renderApp(): void {
  const root = document.getElementById('app') as HTMLDivElement;

  if (!root) {
    throw new Error('Root element #app not found');
  }

  root.innerHTML = '';

  const projectHeading = ProjectHeading() as HTMLHeadElement;

  const formContainer = createDiv() as HTMLDivElement;
  formContainer.className = 'formContainer';
  formContainer.appendChild(formScreen());
  formContainer.appendChild(Navigation());

  const tableContainer = TableContainer();

  const content = createDiv() as HTMLDivElement;
  content.className = 'content';
  content.append(formContainer, tableContainer);

  root.append(projectHeading, content);
}
