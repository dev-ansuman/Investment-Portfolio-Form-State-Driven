import React from 'react';

interface dropdownProps {
  options: string[];
  nameAttribute: string;
  id: string;
}

const Dropdown: React.FC<dropdownProps> = ({ options, nameAttribute, id }) => {
  const createOptions = (option: string) => {
    if (option !== '-- Select --') {
      return <option value={option}>{option}</option>;
    } else {
      return <option value="">{option}</option>;
    }
  };

  return (
    <>
      <select name={nameAttribute} id={id}>
        {options.map((option: string) => createOptions(option))}
      </select>
    </>
  );
};

export default Dropdown;
