import { state } from '../app.state';
import { saveToStorage } from '../app.storage';
import { createButton } from './Ui/button';

const toggleTheme = (): HTMLButtonElement => {
  const button = createButton() as HTMLButtonElement;
  button.className = 'themeToggle';
  button.textContent = state.theme === 'light' ? '🌙' : '🔆';

  button.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', state.theme === 'dark');
    saveToStorage();

    button.textContent = state.theme === 'light' ? '🌙' : '🔆';
  });

  return button;
};

const initializeTheme = (): void => {
  document.body.classList.toggle('dark-theme', state.theme === 'dark');
};

export { toggleTheme, initializeTheme };
