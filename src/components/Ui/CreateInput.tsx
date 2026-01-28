import React from 'react';
import Input from './input';

interface CreateInputProps {
  fieldTitle: string;
  type: string;
  placeholder: string;
  id: string;
}

const CreateInput: React.FC<CreateInputProps> = ({ fieldTitle, type, placeholder, id }) => {
  return (
    <>
      <div>{fieldTitle}</div>
      <Input type={type} placeholder={placeholder} id={id} />
    </>
  );
};

export default CreateInput;
