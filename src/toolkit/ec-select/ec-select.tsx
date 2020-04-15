import React, {useState, useEffect} from 'react';
import './ec-select.scss';
import Select, {components} from 'react-select';
import {ValueType, OptionTypeBase} from 'react-select';
import {invalidSelectStyles, lightSelectStyles, selectStyles, invalidSelectTheme, selectTheme, accessLightSelectTheme, accessDarkSelectTheme, darkSelectStyles} from './ec-select-styles';
import {SelectComponentsProps} from 'react-select/src/Select';
import {FormFieldValidation} from '../../fields';

export type PickerOption = {
  value: string;
  label: string;
};

type EcSelectProps = {
  selectedValue: string;
  values: PickerOption[];
  disabled?: boolean;
  selectValue: (value: string) => void;
  label: string;
  placeholder: string;
  className?: string;
  validation?: FormFieldValidation;
  fetched?: boolean;
  // accessDark: boolean; // context
  // access: boolean; // context
};

export const EcSelect = (props: EcSelectProps) => {
  const {
    fetched, className = '', label,
    selectedValue, selectValue, values, disabled, 
    placeholder, validation, ...rest} = props;
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);


  const handleSelect = (value?: ValueType<OptionTypeBase>) => {
    setDirty(true);
    if(value) {
      selectValue((value as PickerOption).value);
      validation?.setInvalid && validation.setInvalid(false);
    } else {
      selectValue('');
      validation?.setInvalid && validation.setInvalid(true);
      setTouched(true);
    }
  };

  useEffect(() => {
    if(fetched) {
      const selectedOption = getSelectedOption()
      handleSelect(selectedOption)
    };
  }, [fetched]);

// from context
  const getStyles = () => {
    // if(access && accessDark) {
    //   return darkSelectStyles();
    // }
    // if(access) {
    //   return lightSelectStyles();
    // }
    if(validation && validation.invalid && touched && dirty) {
      return invalidSelectStyles(selectStyles);
    }
    return selectStyles;
  }

  const getTheme = () => {
    // if(access && accessDark) {
    //   return accessDarkSelectTheme;
    // }
    // if(access) {
    //   return accessLightSelectTheme;
    // }
    if(validation && validation.invalid && touched && dirty) {
      return invalidSelectTheme;
    }
    return selectTheme;
  }

  const getSelectedOption = () => {
    return values.find(option => option.value === selectedValue)
  }

  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <div className={props.selectProps.menuIsOpen ? "caret-up" : ""}>
            <img src={require('../../down.png')} alt="caret" />
          </div>
        </components.DropdownIndicator>
      )
    );
  };
  
  return (
    <div className={`select ${className}`}>
      <div className="select__label">{label}</div>
      <Select 
              {...rest} onChange={handleSelect} options={values} 
              value={getSelectedOption()} isDisabled={disabled} isClearable
              styles={{...getStyles()}} theme={getTheme()} placeholder={placeholder} 
              onBlur={() => setTouched(true)}
              components={{ DropdownIndicator }}/>
      {validation && validation.invalid && touched && dirty && <div>{validation.errorMessage}</div>}
    </div>
  )
};