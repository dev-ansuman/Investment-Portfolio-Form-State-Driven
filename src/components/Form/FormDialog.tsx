import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/close';

import { useAppStore } from '../../store/use-app-store';
import Form from './Form';

const FormDialog: React.FC = () => {
  const isFormOpen = useAppStore((state) => state.isFormOpen);
  const isEditMode = useAppStore((state) => state.isEditMode);
  const closeForm = useAppStore((state) => state.closeForm);

  return (
    <Dialog open={isFormOpen} onClose={closeForm} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{isEditMode ? 'Edit Portfolio' : 'Add Portfolio'}</Typography>

        <IconButton onClick={closeForm}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
