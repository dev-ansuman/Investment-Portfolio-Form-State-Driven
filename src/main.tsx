import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './app-context/app-provider';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme/theme';

import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>
);
