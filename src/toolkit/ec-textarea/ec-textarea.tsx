import React, {useEffect, useState} from 'react';
import './ec-textarea.scss';
import {FormFieldValidation} from '../../fields';

export type EcTextareaProps = React.HTMLProps<HTMLTextAreaElement> & {
  value: string;
  disabled?: boolean;
  label?: string;
  placeholder: string;
  className?: string;
  valueChange: (value: string) => void;
  validation?: FormFieldValidation;
  fetched?: boolean;
  name: string;
  mask?: string;
  imageName?: string;
};

export const EcTextarea = (props: EcTextareaProps) => {
  const [dirty, setDirsty] = useState(false);
  const [touched, setTouched] = useState(false);
  const {value, fetched, disabled, className = '', label = '', placeholder, valueChange, validation, name, ...rest} = props;

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
    <div className={`textarea ${className}`}>
      {label && <label className="textarea__label">{label}</label>}
      <textarea {...rest} value={value}
            disabled={disabled}
            name={name}
            onBlur={() => setTouched(true)}
            className={`textarea__control ${validation?.invalid && dirty && touched ? 'textarea__control--invalid' : ''}`}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)}/>
      {props.imageName && <img src={require(`../../${props.imageName}`)} alt={props.imageName}/>}
      {validation?.invalid && dirty && touched && <div className='textarea__error'>{validation.errorMessage}</div>}
    </div>
  );
};