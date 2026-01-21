import { state } from './app.state.ts';

const STORAGE_KEY = 'portfolioFormData';

const loadFromStorage = (): void => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      const data = JSON.parse(stored);
      // Merge saved data directly into state
      Object.assign(state, data);
    } catch (error) {
      console.error('Failed to Load from storage:', error);
    }
  }
};

const saveToStorage = (): void => {
  try {
    // Save entire state to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save to storage:', error);
  }
};

export { loadFromStorage, saveToStorage };
