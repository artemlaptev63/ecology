import React, {useState, useEffect} from 'react';
import './ec-multi-select.scss';
import Select, {components} from 'react-select';
import {ValueType, OptionTypeBase} from 'react-select';
import {invalidSelectStyles, lightSelectStyles, selectStyles, invalidSelectTheme, selectTheme, accessLightSelectTheme, accessDarkSelectTheme, darkSelectStyles, multiSelectStyles} from '../ec-select/ec-select-styles';
import {SelectComponentsProps} from 'react-select/src/Select';
import {PickerOption} from '../ec-select/ec-select';
import {FormFieldValidation} from '../../fields';

type EcMultiSelectProps = {
  selectedValues: string[];
  values: PickerOption[];
  disabled?: boolean;
  selectValue: (values: string[]) => void;
  label: string;
  placeholder: string;
  className?: string;
  // invalid?: boolean;
  // validator?: (value: string) => boolean;
  // setInvalid?: (invalid: boolean) => void;
  // error?: string;
  validation?: FormFieldValidation;
  fetched?: boolean;
  // accessDark: boolean; // context
  // access: boolean; // context
};

export const EcMultiSelect = (props: EcMultiSelectProps) => {
  const {
    fetched, className = '', label,
    selectedValues, selectValue, values, disabled, 
    placeholder, validation, ...rest} = props;
    
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  const handleSelect = (value?: ValueType<PickerOption>) => {
    setDirty(true);
    if(value) {
      selectValue((value as PickerOption[]).map(item => item.value));
      validation?.setInvalid && validation.setInvalid(false);
    } else {
      selectValue([]);
      validation && validation.setInvalid(true);
      setTouched(true);
    }
  };

  useEffect(() => {
    if(fetched) {
      handleSelect(getSelectedValues());
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
    return multiSelectStyles;
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
  };

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

  const getSelectedValues = () => {
    let selectedValues: PickerOption[] = [];
    props.selectedValues.forEach((id: string) => {
      values.forEach((item: PickerOption) => {
        if (item.value === id) {
          selectedValues.push(item);
        }
      })
    })

    return selectedValues;
  }
  
  return (
    <div className={`multi-select ${className}`}>
      <div className="multi-select__label">{label}</div>
      <Select {...rest} onChange={handleSelect} options={values} 
              value={getSelectedValues()} isDisabled={disabled} isClearable
              styles={{...getStyles()}} theme={getTheme()} placeholder={placeholder} 
              onBlur={() => setTouched(true)}
              components={{ DropdownIndicator }} isMulti/>
      {validation && validation.invalid && touched && dirty && <div>{validation?.errorMessage}</div>}
    </div>
  )
};