import React from 'react';
import FormDialog from './components/Form/FormDialog';
import Table from './components/Table/Table';
import Navbar from './components/Navbar';
import './App.css';
import { useAppStore } from './store/use-app-store';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const App: React.FC = () => {
  const records = useAppStore((s) => s.records);
  console.log(records);
  const openAddForm = useAppStore((s) => s.openAddForm);

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
          position: 'fiexd',
          bottom: '24',
          right: '24',
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default App;
