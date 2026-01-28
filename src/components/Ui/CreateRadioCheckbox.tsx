import React from 'react';
import RadioCheckbox from './radioCheckbox';

interface createRadioCheckboxProps {
  fieldTitle: string;
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
}

const CreateRadioCheckbox: React.FC<createRadioCheckboxProps> = ({
  fieldTitle,
  type,
  options,
  name,
  id,
  hidden,
}) => {
  return (
    <>
      <div>{fieldTitle}</div>
      <RadioCheckbox type={type} options={options} name={name} id={id} hidden={hidden} />
    </>
  );
};

export default CreateRadioCheckbox;
