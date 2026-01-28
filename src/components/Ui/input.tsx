import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id }) => {
  return <input type={type} placeholder={placeholder} id={id} className="fieldInput" />;
};

export default Input;
