import './style.css';
import { loadFromStorage } from './app.storage.ts';
import { renderApp } from './components/App.ts';

document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderApp();
});
