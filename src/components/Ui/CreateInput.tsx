import React from 'react';
import Input from './input';

interface CreateInputProps {
  fieldTitle: string;
  inputType: string;
  inputPlaceholder: string;
  id: string;
}

const CreateInput: React.FC<CreateInputProps> = ({
  fieldTitle,
  inputType,
  inputPlaceholder,
  id,
}) => {
  return (
    <>
      <div>{fieldTitle}</div>
      <Input inputType={inputType} inputPlaceholder={inputPlaceholder} id={id} />
    </>
  );
};

export default CreateInput;
