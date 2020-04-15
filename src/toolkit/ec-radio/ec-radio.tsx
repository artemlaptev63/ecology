import React from 'react';
import './ec-radio.scss';

type EcRadioProps = {
  label: string;
  name: string;
  value: string;
  selectedId: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export const EcRadio = (props: EcRadioProps) => {
  const {disabled, name, label, value, selectedId, onChange} = props;
  return (
    <label className="radio">
      <input className="radio__input"
              name={name} type="radio" disabled={disabled}
              checked={selectedId === value} 
              onChange={() => onChange(value)} />
      <span className="radio__checkmark"></span>
      {label}
    </label>
  );
};