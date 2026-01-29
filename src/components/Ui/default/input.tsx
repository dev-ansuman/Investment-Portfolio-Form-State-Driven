import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="fieldInput"
      name={name}
      value={value || ''}
      onChange={onChange}
    />
  );
};

export default Input;
