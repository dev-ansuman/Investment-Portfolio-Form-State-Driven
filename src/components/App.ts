import { formScreen } from './Form/Form.ts';
import { createDiv } from './input.ts';
import { Navigation } from './navigation-buttons.ts';

export function renderApp(): void {
  const root = document.getElementById('app') as HTMLDivElement;

  if (!root) {
    throw new Error('Root element #app not found');
  }

  root.innerHTML = '';

  const container = createDiv() as HTMLDivElement;
  container.className = 'formContainer';

  container.appendChild(formScreen());
  container.appendChild(Navigation());

  root.appendChild(container);
}
