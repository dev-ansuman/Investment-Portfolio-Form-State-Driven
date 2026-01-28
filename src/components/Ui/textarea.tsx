import React from 'react';

interface textAreaProps {
  name: string;
  id: string;
  placeholder: string;
  rows: number;
}

const Textarea: React.FC<textAreaProps> = ({ name, id, placeholder, rows }) => {
  return <textarea name={name} id={id} placeholder={placeholder} rows={rows}></textarea>;
};

export default Textarea;
