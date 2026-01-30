import React from 'react';
import { TextField } from '@mui/material';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const MaterialInput: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  label,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      placeholder={placeholder}
      id={id}
      className="fieldInput"
      name={name}
      value={value || ''}
      onChange={onChange}
      style={{ height: '29px' }}
    />
  );
};

export default MaterialInput;
