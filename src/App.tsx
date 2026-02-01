import React from 'react';
import FormDialog from './components/Form/FormDialog';
// import Table from './components/Table/Table';
import Table from './components/Table/table';
import Navbar from './components/Navbar';
import './App.css';
import { useAppStore } from './store/use-app-store';
import { Fab, Snackbar, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const App: React.FC = () => {
  const openAddForm = useAppStore((s) => s.openAddForm);
  const snackbar = useAppStore((s) => s.snackbar);
  const hideSnackbar = useAppStore((s) => s.hideSnackbar);

  return (
    <>
      <Navbar />
      <div className="content">
        <FormDialog />
        <Table />
      </div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={openAddForm}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={hideSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
