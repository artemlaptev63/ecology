import React, {useEffect, useState} from 'react';
import './ec-input.scss';
import {FormFieldValidation} from '../../fields';

export type EcInputProps = React.HTMLProps<HTMLInputElement> & {
  value: string;
  disabled?: boolean;
  label: string;
  placeholder: string;
  className?: string;
  valueChange: (value: string) => void;
  validation?: FormFieldValidation;
  fetched?: boolean;
  name: string;
  mask?: string;
};

export const EcInput = React.forwardRef((props: EcInputProps, inputRef?: React.Ref<HTMLInputElement>) => {
  const [dirty, setDirsty] = useState(false);
  const [touched, setTouched] = useState(false);
  const {value, fetched, disabled, className = '', label, placeholder, valueChange, validation, name, ...rest} = props;

  useEffect(() => {
    if(fetched) {
      handleChange(value)
    };
  }, [fetched]);

  const handleChange = (value: string) => {
    if(!dirty) {
      setDirsty(true);
    }
    let isInvalid = false;
    if(validation && validation.validator) {
      isInvalid = validation.validator(value);
    } else {
      isInvalid = false;
    }

    validation && validation.setInvalid(isInvalid)

    valueChange(value);
  };



  return (
    <div className={`input ${className}`}>
      <label className="input__label">{label}</label>
      <input {...rest} value={value}
            disabled={disabled}
            name={name}
            onBlur={() => setTouched(true)}
            className={`input__control ${validation?.invalid && dirty && touched ? 'input__control--invalid' : ''}`}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)} ref={inputRef}/>
      {validation?.invalid && dirty && touched && <div className='input__error'>{validation.errorMessage}</div>}
    </div>
  );
});