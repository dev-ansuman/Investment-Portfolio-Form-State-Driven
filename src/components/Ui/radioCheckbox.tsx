import React from 'react';

interface radioCheckboxProps {
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
}

interface optionProps {
  type: string;
  option: string;
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
}

const RadioCheckbox: React.FC<radioCheckboxProps> = ({
  type,
  options,
  name,
  id,
  hidden,
  inputClass,
}) => {
  const createOptions = ({ type, option, name, id, hidden, inputClass }: optionProps) => {
    return (
      <>
        <input type={type} id={option + id} name={name} value={option} hidden={hidden} />
        <label htmlFor={option + id} className={inputClass}>
          {option}
        </label>
      </>
    );
  };

  return (
    <div className="radioContainer">
      {options.map((option) => createOptions({ type, option, name, id, hidden, inputClass }))}
    </div>
  );
};

export default RadioCheckbox;
