import { formScreen } from './Form/Form.ts';
import { createDiv } from './create-input.ts';
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
  content.style.display = 'flex';

  root.append(projectHeading, content);
  // root.style.display = 'flex';
}
