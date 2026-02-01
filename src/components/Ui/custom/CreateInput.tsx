import React from 'react';
import Input from '../default/Input';

interface CreateInputProps {
  name: string;
  fieldTitle: string;
  type: string;
  placeholder: string;
  id: string;
  fieldClass: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const CreateInput: React.FC<CreateInputProps> = ({
  name,
  fieldTitle,
  type,
  placeholder,
  id,
  fieldClass,
  value,
  onChange,
  required,
}) => {
  if (!required) {
    return (
      <>
        <div className={fieldClass}>{fieldTitle}</div>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </>
    );
  } else {
    return (
      <>
        <div className={fieldClass}>
          {fieldTitle}
          <span className="required"> *</span>
        </div>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
};

export default CreateInput;
