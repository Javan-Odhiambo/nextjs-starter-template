import React from 'react';
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
  label?: string;
  id: string;
  register: any;
  error?: FieldError | null;
};

const InputField: React.FC<InputFieldProps> = ({ label, id, register, error }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}:</label>}
      <input id={id} {...register} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default InputField;