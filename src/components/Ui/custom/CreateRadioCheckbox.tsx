import React from 'react';
import RadioCheckbox from './RadioCheckbox';

interface createRadioCheckboxProps {
  fieldTitle: string;
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const CreateRadioCheckbox: React.FC<createRadioCheckboxProps> = ({
  fieldTitle,
  type,
  options,
  name,
  id,
  hidden,
  inputClass,
  value,
  onChange,
  required,
}) => {
  if (!required) {
    return (
      <>
        <div className="fieldTitle">{fieldTitle}</div>
        <div>
          <RadioCheckbox
            type={type}
            options={options}
            name={name}
            id={id}
            hidden={hidden}
            inputClass={inputClass}
            value={value}
            onChange={onChange}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="fieldTitle">
          {fieldTitle}
          <span className="required"> *</span>
        </div>
        <div>
          <RadioCheckbox
            type={type}
            options={options}
            name={name}
            id={id}
            hidden={hidden}
            inputClass={inputClass}
            value={value}
            onChange={onChange}
          />
        </div>
      </>
    );
  }
};

export default CreateRadioCheckbox;
