import React from 'react';
import Dropdown from './dropdown';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  name: string;
  id: string;
  fieldClass: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({
  fieldTitle,
  options,
  name,
  id,
  fieldClass,
  value,
  onChange,
}) => {
  return (
    <>
      <div className={fieldClass}>{fieldTitle}</div>
      <div>
        <Dropdown options={options} name={name} id={id} value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default CreateDropdown;
