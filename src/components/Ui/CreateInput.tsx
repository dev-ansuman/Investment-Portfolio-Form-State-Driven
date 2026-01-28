import React from 'react';
import Input from './input';

interface CreateInputProps {
  fieldTitle: string;
  type: string;
  placeholder: string;
  id: string;
  fieldClass: string;
}

const CreateInput: React.FC<CreateInputProps> = ({
  fieldTitle,
  type,
  placeholder,
  id,
  fieldClass,
}) => {
  return (
    <>
      <div className={fieldClass}>{fieldTitle}</div>
      <Input type={type} placeholder={placeholder} id={id} />
    </>
  );
};

export default CreateInput;
