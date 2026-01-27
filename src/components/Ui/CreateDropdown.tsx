import React from 'react';
import Dropdown from './dropdown';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  nameAttribute: string;
  id: string;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({
  fieldTitle,
  options,
  nameAttribute,
  id,
}) => {
  return (
    <>
      <div>{fieldTitle}</div>
      <Dropdown options={options} nameAttribute={nameAttribute} id={id} />
    </>
  );
};

export default CreateDropdown;
