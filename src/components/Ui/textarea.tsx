import React from 'react';

interface textAreaProps {
  name: string;
  id: string;
  placeholder: string;
}

const Textarea: React.FC<textAreaProps> = ({ name, id, placeholder }) => {
  return <textarea name={name} id={id} placeholder={placeholder}></textarea>;
};

export default Textarea;
