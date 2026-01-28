import React from 'react';
import RadioCheckbox from './radioCheckbox';

interface createRadioCheckboxProps {
  fieldTitle: string;
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
}

const CreateRadioCheckbox: React.FC<createRadioCheckboxProps> = ({
  fieldTitle,
  type,
  options,
  name,
  id,
  hidden,
  inputClass,
}) => {
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
        />
      </div>
    </>
  );
};

export default CreateRadioCheckbox;
