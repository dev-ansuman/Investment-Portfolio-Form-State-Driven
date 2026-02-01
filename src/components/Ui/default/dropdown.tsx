import React from 'react';

interface dropdownProps {
  options: string[];
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<dropdownProps> = ({ options, name, id, value, onChange }) => {
  const createOptions = (option: string, index: number) => {
    if (option !== '-- Select --') {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    } else {
      return (
        <option key={index} value="">
          {option}
        </option>
      );
    }
  };

  return (
    <select name={name} id={id} className="fieldInput" value={value || ''} onChange={onChange}>
      {options.map((option: string, index: number) => createOptions(option, index))}
    </select>
  );
};

export default Dropdown;
