import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useAppStore } from '../store/use-app-store';
import App from '../App';

const AppWithTheme = () => {
  const mode = useAppStore((s) => s.themeMode);
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default AppWithTheme;
