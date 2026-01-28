import React from 'react';
import Dropdown from './dropdown';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  name: string;
  id: string;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({ fieldTitle, options, name, id }) => {
  return (
    <>
      <div>{fieldTitle}</div>
      <Dropdown options={options} name={name} id={id} />
    </>
  );
};

export default CreateDropdown;
