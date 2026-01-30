import React from 'react';
import { Button } from '@mui/material';

interface buttonProps {
  text: string;
  id: string;
  buttonClass: string;
  action: () => void;
  disabled?: boolean;
  variant: 'contained' | 'outlined' | 'text';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const MaterialButton: React.FC<buttonProps> = ({
  text,
  id,
  buttonClass,
  action,
  disabled = false,
  variant,
  color,
}) => {
  return (
    <>
      <Button
        variant={variant}
        className={buttonClass}
        id={id}
        onClick={action}
        disabled={disabled}
        color={color}
        style={{ borderRadius: '19px', width: '100px' }}
      >
        {text}
      </Button>
    </>
  );
};

export default MaterialButton;
