import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import type { ChangeEvent, ReactNode } from 'react';

interface dropdownProps {
  options: string[];
  name: string;
  id: string;
  value: string;
  // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange: (
    event:
      | ChangeEvent<Omit<HTMLInputElement, 'value'> & { value: string }>
      | (Event & { target: { value: string; name: string } }),
    child: ReactNode
  ) => void;
  fieldTitle: string;
}

const MaterialDropdown: React.FC<dropdownProps> = ({
  options,
  name,
  id,
  value,
  onChange,
  fieldTitle,
}) => {
  const createOptions = (option: string, index: number) => {
    if (option !== '-- Select --') {
      return (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index} value="">
          {option}
        </MenuItem>
      );
    }
  };

  return (
    // <select name={name} id={id} className="fieldInput" value={value || ''} onChange={onChange}>
    //   {options.map((option: string, index: number) => createOptions(option, index))}
    // </select>

    <FormControl>
      <InputLabel id="dropdownSelect">{fieldTitle}</InputLabel>
      <Select
        labelId="dropdownSelect"
        // label="Age"

        name={name}
        id={id}
        className="fieldInput"
        value={value || ''}
        onChange={onChange}
        style={{ width: '100%' }}
      >
        {options.map((option: string, index: number) => createOptions(option, index))}
      </Select>
    </FormControl>
  );
};

export default MaterialDropdown;
