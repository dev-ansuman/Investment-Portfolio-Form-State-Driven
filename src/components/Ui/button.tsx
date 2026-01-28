import React from 'react';

interface buttonProps {
  text: string;
  id: string;
  buttonClass: string;
  action: () => void;
}

const Button: React.FC<buttonProps> = ({ text, id, buttonClass, action }) => {
  return (
    <>
      <button className={buttonClass} id={id} onClick={action}>
        {text}
      </button>
    </>
  );
};

export default Button;
