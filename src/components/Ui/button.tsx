import React from 'react';

interface buttonProps {
  text: string;
}

const Button: React.FC<buttonProps> = ({ text }) => {
  return (
    <>
      <button>{text}</button>
    </>
  );
};

export default Button;
