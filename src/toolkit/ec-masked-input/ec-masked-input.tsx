import React, {useEffect, useState} from 'react';
import './../ec-input/ec-input.scss';
import {EcInputProps} from '../ec-input/ec-input';
import MaskedInput from 'react-input-mask';

export const EcMaskedInput = React.forwardRef((props: EcInputProps, inputRef?: React.Ref<HTMLInputElement>) => {
  const [dirty, setDirsty] = useState(false);
  const [touched, setTouched] = useState(false);
  const {value, fetched, disabled, className = '', label, placeholder, valueChange, validation, mask = '', ...rest} = props;

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
      <MaskedInput value={value}
                   mask={mask}
                   disabled={disabled}
                   onBlur={() => setTouched(true)}
                   className={`input__control ${validation?.invalid && dirty && touched ? 'input__control--invalid' : ''}`}
                   placeholder={placeholder}
                   onChange={(e) => handleChange(e.target.value)}/>
      {validation?.invalid && dirty && touched && <div className='input__error'>{validation.errorMessage}</div>}
    </div>
  );
});