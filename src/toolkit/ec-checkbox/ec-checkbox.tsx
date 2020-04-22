import React from 'react';
import './ec-checkbox.scss';

type EcCheckboxProps = {
  title?: string;
  value: boolean;
  className?: string;
  disabled?: boolean;
  circle?: boolean;
  onChange: (value: boolean) => void;
};

export const EcCheckbox = (props: EcCheckboxProps) => {
  const {disabled, title = '', value, onChange, circle} = props;

  return (
    <label className="checkbox">
      {title}
      <input className='checkbox__input'
              type="checkbox" disabled={disabled}
              checked={value}
              onChange={() => onChange(!value)} />
      <span className={`checkbox__checkmark ${circle && 'checkbox__checkmark--circle'}`}></span>
    </label>
  );
};