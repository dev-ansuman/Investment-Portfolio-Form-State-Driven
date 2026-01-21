import type { PortfolioFormRecords } from './app.types.ts';

const setLocalStorage = (data: PortfolioFormRecords[]): void => {
  const localStorageString: string = JSON.stringify(data);

  localStorage.setItem('portfolioFormData', localStorageString);
};

const getLocalStorage = (): PortfolioFormRecords[] => {
  const localStorageString: string | null = localStorage.getItem('portfolioFormData');

  if (localStorageString) {
    const localStorageData = JSON.parse(localStorageString);
    return localStorageData;
  } else {
    return [];
  }
};

export { setLocalStorage, getLocalStorage };
