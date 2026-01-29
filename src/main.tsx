import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './app-context/app-provider';

import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
