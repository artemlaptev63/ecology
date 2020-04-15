import {useContext, useState} from 'react';
import {StoresContext} from './stores';

export enum ValidatorType {
	OPTIONAL = 'OPTIONAL',
	REQUIRED = 'REQUIRED',
	// EMAIL = 'EMAIL',
	// DATE = 'DATE',
	// DOB = 'DOB',
	// PHONE_NUMBER = 'PHONE_NUMBER',
	// LENGTH = 'LENGTH',
	// ACCOUNTING_PERIOD = 'ACCOUNTING_PERIOD',
	// PERCENT = 'PERCENT',
	// NI_NUMBER = 'NI_NUMBER',
	// NUMBER = 'NUMBER',
	// NOT_REQUIRED_NUMBER = 'NOT_REQUIRED_NUMBER',
	// POSTCODE = 'POSTCODE',
}

export type Validator = (value?: any) => boolean;
export type Validators = {
	[key: string]: Validator;
}

export const validators: Validators = {
	[ValidatorType.OPTIONAL]: () => false,
	[ValidatorType.REQUIRED]: (value?: any) => !value,
};

export type FormFieldValidation = {
	invalid: boolean;
	validator: (value?: any) => boolean;
  setInvalid: (invalid: boolean) => void;
  errorMessage?: string;
}

type TestFormValues = {
  date: Date | null;
  selectId: string;
  arrayIds: string[];
  inputValue: string;
  maskedValue: string;
}

type TestFormSetters = {
  setDate: (date: Date | null) => void;
  setSelectId: (selectId: string) => void;
  setArrayIds: (arrayIds: string[]) => void;
  setInputValue: (value: string) => void;
  setMaskedValue: (value: string) => void;
}

type TestFormValidation = {
  date: FormFieldValidation;
  selectId: FormFieldValidation;
  arrayIds: FormFieldValidation;
  inputValue: FormFieldValidation;
  maskedValue: FormFieldValidation;
}

const checkDateValidator = (date: Date | null): boolean => {
  if(!date) {
    return true;
  }
  return false;
}

export const useTestFormValidation = () => {
  const [dateInvalid, setDateInvalid] = useState(true);
  const [selectIdInvalid, setSelectIdInvalid] = useState(true);
  const [arrayIdsInvalid, setArrayIdsInvalid] = useState(true);
  const [inputValueInvalid, setInputValueInvalid] = useState(true);
  const [maskedValueInvalid, setMaskedValueInvalid] = useState(true);

	const date: FormFieldValidation = {
		invalid: dateInvalid,
		setInvalid: setDateInvalid,
    validator: checkDateValidator,
    errorMessage: 'The field is required'
  };

  const selectId: FormFieldValidation = {
		invalid: selectIdInvalid,
		setInvalid: setSelectIdInvalid,
    validator: (value?: any) => !value,
    errorMessage: 'The field is required'
  };

  const arrayIds: FormFieldValidation = {
		invalid: arrayIdsInvalid,
		setInvalid: setArrayIdsInvalid,
    validator: (value?: any) => !value,
    errorMessage: 'The field is required'
  };

  const inputValue: FormFieldValidation = {
		invalid: inputValueInvalid,
		setInvalid: setInputValueInvalid,
    validator: (value?: any) => !value,
    errorMessage: 'The field is required'
  };

  const maskedValue: FormFieldValidation = {
		invalid: maskedValueInvalid,
		setInvalid: setMaskedValueInvalid,
    validator: (value?: any) => !value,
    errorMessage: 'The field is required'
  };

	return {
		validation: {date, selectId, arrayIds, inputValue, maskedValue},
    invalid: dateInvalid || 
            selectIdInvalid ||
            arrayIdsInvalid ||
            maskedValueInvalid ||
            inputValueInvalid
	};
};


export const useTestFormFields = () => {
  const {testStore} = useContext(StoresContext);

  const values: TestFormValues = {
    date: testStore.date,
    selectId: testStore.selectId,
    arrayIds: testStore.arrayIds,
    inputValue: testStore.inputValue,
    maskedValue: testStore.maskedValue,
  };
    
  const setters: TestFormSetters = {
    setDate: testStore.setDate,
    setSelectId: testStore.setSelectId,
    setArrayIds: testStore.setArrayIds,
    setInputValue: testStore.setInputValue,
    setMaskedValue: testStore.setMaskedValue
  };

  return {
    values,
    setters
  };
};