import React from 'react';
import './ec-checkbox.scss';

type EcCheckboxProps = {
  title: string;
  name: string;
  value: boolean;
  className?: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;
};

export const EcCheckbox = (props: EcCheckboxProps) => {
  const {disabled, title, value, onChange, name} = props;

  return (
    <label className="checkbox">
      {title}
      <input className="checkbox__input"
              type="checkbox" disabled={disabled}
              checked={value}
              name={name} 
              onChange={() => onChange(!value)} />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};