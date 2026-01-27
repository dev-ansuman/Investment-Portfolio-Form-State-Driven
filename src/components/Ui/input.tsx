import React from 'react';

interface InputProps {
  inputType: string;
  inputPlaceholder: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ inputType, inputPlaceholder, id }) => {
  return <input type={inputType} placeholder={inputPlaceholder} id={id} />;
};

export default Input;
