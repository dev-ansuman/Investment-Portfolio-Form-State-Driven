import './style.css';
import { loadFromStorage } from './app.storage.ts';
import { renderApp } from './components/App.ts';
import { initializeTheme } from './components/theme.ts';

document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  initializeTheme();
  renderApp();
});
