import React from 'react';

interface radioCheckboxProps {
  type: string;
  options: string[];
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface optionProps {
  type: string;
  option: string;
  name: string;
  id: string;
  hidden: boolean;
  inputClass: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioCheckbox: React.FC<radioCheckboxProps> = ({
  type,
  options,
  name,
  id,
  hidden,
  inputClass,
  value,
  onChange,
}) => {
  const createOptions = ({
    type,
    option,
    name,
    id,
    hidden,
    inputClass,
    checked,
    onChange,
  }: optionProps) => {
    return (
      <React.Fragment key={option + id}>
        <input
          type={type}
          id={option + id}
          name={name}
          value={option}
          hidden={hidden}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={option + id} className={inputClass}>
          {option}
        </label>
      </React.Fragment>
    );
  };

  return (
    <div className="radioContainer">
      {options.map((option) =>
        createOptions({
          type,
          option,
          name,
          id,
          hidden,
          inputClass,
          checked: value === option,
          onChange,
        })
      )}
    </div>
  );
};

export default RadioCheckbox;
