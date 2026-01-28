import React from 'react';
import Dropdown from './dropdown';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  name: string;
  id: string;
  fieldClass: string;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({
  fieldTitle,
  options,
  name,
  id,
  fieldClass,
}) => {
  return (
    <>
      <div className={fieldClass}>{fieldTitle}</div>
      <div>
        <Dropdown options={options} name={name} id={id} />
      </div>
    </>
  );
};

export default CreateDropdown;
