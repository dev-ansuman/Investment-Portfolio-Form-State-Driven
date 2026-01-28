import React from 'react';

interface radioCheckboxProps {
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
}

interface optionProps {
  type: string;
  option: string;
  name: string;
  id: string;
  hidden: boolean;
}

const RadioCheckbox: React.FC<radioCheckboxProps> = ({ type, options, name, id, hidden }) => {
  const createOptions: React.FC<optionProps> = ({ type, option, name, id, hidden }) => {
    return (
      <>
        <input type={type} id={option + id} name={name} hidden={hidden} />
        <label htmlFor={option + id}>{option}</label>
      </>
    );
  };

  return <>{options.map((option) => createOptions({ type, option, name, id, hidden }))}</>;
};

export default RadioCheckbox;
