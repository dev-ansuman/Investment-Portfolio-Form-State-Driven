import React from 'react';
import MaterialDropdown from '../default/dropdown';
import type { ChangeEvent, ReactNode } from 'react';

interface CreateDropdownProps {
  fieldTitle: string;
  options: string[];
  name: string;
  id: string;
  fieldClass: string;
  value: string;
  // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange: (
    event:
      | ChangeEvent<Omit<HTMLInputElement, 'value'> & { value: string }>
      | (Event & { target: { value: string; name: string } }),
    child: ReactNode
  ) => void;
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
          <MaterialDropdown
            options={options}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            fieldTitle={fieldTitle}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <div className={fieldClass}>
          {fieldTitle}
          <span className="required"> *</span>
        </div> */}
        <div>
          <MaterialDropdown
            options={options}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            fieldTitle={fieldTitle}
          />
        </div>
      </>
    );
  }
};

export default CreateDropdown;
