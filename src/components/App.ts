import { FormScreen } from './Form/Form.ts';
import { createDiv } from './Ui/div.ts';
import { Navigation } from './Form/navigation-buttons.ts';
import { TableContainer } from './Table/table.ts';
import { ProjectHeading } from './heading.ts';
import { createHeader } from './Ui/header.ts';
import { toggleTheme } from './theme.ts';

class AppComponent {
  render(): void {
    const root = document.getElementById('app') as HTMLDivElement;

    if (!root) {
      throw new Error('Root element #app not found');
    }

    root.innerHTML = '';

    const header = createHeader() as HTMLHeadElement;
    const projectHeading = ProjectHeading() as HTMLHeadElement;
    const themeToggle = toggleTheme();

    header.append(projectHeading, themeToggle);

    const formContainer = createDiv() as HTMLDivElement;
    formContainer.className = 'formContainer';
    formContainer.appendChild(FormScreen());
    formContainer.appendChild(Navigation());

    const tableContainer = TableContainer();

    const content = createDiv() as HTMLDivElement;
    content.className = 'content';
    content.append(formContainer, tableContainer);

    root.append(header, content);
  }
}

const appComponent = new AppComponent();

export const renderApp = (): void => {
  appComponent.render();
};
