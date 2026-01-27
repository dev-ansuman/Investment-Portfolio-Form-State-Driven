import { stateManager } from '../app.state';
import { saveToStorage } from '../app.storage';
import { createButton } from './Ui/button';
import { StateManager } from '../core/state-manager';

class ToggleThemeComponent {
  private stateManager: StateManager;

  constructor(stateManager: StateManager) {
    this.stateManager = stateManager;
  }
  render(): HTMLButtonElement {
    const button = createButton() as HTMLButtonElement;
    button.className = 'themeToggle';
    button.textContent = stateManager.getTheme() === 'light' ? '🌙' : '🔆';

    button.addEventListener('click', () => {
      const newTheme = this.stateManager.getTheme() === 'light' ? 'dark' : 'light';
      this.stateManager.setTheme(newTheme);
      document.body.classList.toggle('dark-theme', this.stateManager.getTheme() === 'dark');
      saveToStorage();

      button.textContent = this.stateManager.getTheme() === 'light' ? '🌙' : '🔆';
    });

    return button;
  }
}

const toggleThemeComponent = new ToggleThemeComponent(stateManager);

const toggleTheme = (): HTMLButtonElement => {
  return toggleThemeComponent.render();
};

const initializeTheme = (): void => {
  document.body.classList.toggle('dark-theme', stateManager.getTheme() === 'dark');
};

export { toggleTheme, initializeTheme };
