import React from 'react';

interface buttonProps {
  text: string;
  id: string;
  buttonClass: string;
  action: () => void;
  disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({ text, id, buttonClass, action, disabled = false }) => {
  return (
    <>
      <button className={buttonClass} id={id} onClick={action} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;
