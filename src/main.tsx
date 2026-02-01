import ReactDOM from 'react-dom/client';
// import App from './App';
import { AppProvider } from './app-context/app-provider';
// import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
// import { lightTheme } from './theme/theme';
import AppWithTheme from './theme/ThemeWrapper';

import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <ThemeProvider theme={theme}>
  // <CssBaseline />
  <AppProvider>
    <AppWithTheme />
  </AppProvider>
  // </ThemeProvider>
);
