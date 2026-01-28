import React from 'react';

interface dropdownProps {
  options: string[];
  name: string;
  id: string;
}

const Dropdown: React.FC<dropdownProps> = ({ options, name, id }) => {
  const createOptions = (option: string) => {
    if (option !== '-- Select --') {
      return <option value={option}>{option}</option>;
    } else {
      return <option value="">{option}</option>;
    }
  };

  return (
    <select name={name} id={id}>
      {options.map((option: string) => createOptions(option))}
    </select>
  );
};

export default Dropdown;
