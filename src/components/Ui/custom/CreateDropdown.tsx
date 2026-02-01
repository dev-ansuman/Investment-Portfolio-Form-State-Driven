import React from 'react';
import Dropdown from '../default/Dropdown';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  name: string;
  id: string;
  fieldClass: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({
  fieldTitle,
  options,
  name,
  id,
  fieldClass,
  value,
  onChange,
  required,
}) => {
  if (!required) {
    return (
      <>
        <div className={fieldClass}>{fieldTitle}</div>
        <div>
          <Dropdown options={options} name={name} id={id} value={value} onChange={onChange} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={fieldClass}>
          {fieldTitle}
          <span className="required"> *</span>
        </div>
        <div>
          <Dropdown options={options} name={name} id={id} value={value} onChange={onChange} />
        </div>
      </>
    );
  }
};

export default CreateDropdown;
