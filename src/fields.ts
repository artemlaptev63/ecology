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
  startDate: Date | null;
  endDate: Date | null;
}

type TestFormSetters = {
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

type TestFormValidation = {
  startDate: FormFieldValidation;
  endDate: FormFieldValidation;
}

const checkDateValidator = (date: Date | null): boolean => {
  if(!date) {
    return true;
  }
  return false;
}

export const useTestFormValidation = () => {
  const [startDateInvalid, setStartDateInvalid] = useState(true);
  const [endDateInvalid, setEndDateInvalid] = useState(true);

	const startDate: FormFieldValidation = {
		invalid: startDateInvalid,
		setInvalid: setStartDateInvalid,
    validator: checkDateValidator,
    errorMessage: 'The field is required'
  };

  const endDate: FormFieldValidation = {
		invalid: endDateInvalid,
		setInvalid: setEndDateInvalid,
    validator: checkDateValidator,
    errorMessage: 'The field is required'
  };

	return {
		validation: {startDate, endDate},
    invalid: startDateInvalid || endDateInvalid
	};
};


export const useTestFormFields = () => {
  const {testStore} = useContext(StoresContext);

  const values: TestFormValues = {
    startDate: testStore.startDate,
    endDate: testStore.endDate,
  };
    
  const setters: TestFormSetters = {
    setStartDate: testStore.setStartDate,
    setEndDate: testStore.setEndDate,
  };

  return {
    values,
    setters
  };
};