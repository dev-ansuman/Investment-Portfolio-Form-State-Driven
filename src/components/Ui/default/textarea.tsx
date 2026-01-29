import React from 'react';

interface textAreaProps {
  name: string;
  id: string;
  placeholder: string;
  rows: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<textAreaProps> = ({ name, id, placeholder, rows, value, onChange }) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      rows={rows}
      value={value || ''}
      onChange={onChange}
    />
  );
};

export default Textarea;
