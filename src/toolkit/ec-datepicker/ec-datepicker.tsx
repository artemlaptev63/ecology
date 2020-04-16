import React, {useState, useEffect, useRef} from 'react';
import '../../App.scss';
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import './ec-datepicker.scss';
import ReactDatePicker, {ReactDatePickerProps} from 'react-datepicker';
import {FormFieldValidation} from '../../fields';
import MaskedInput from 'react-input-mask';

registerLocale('ru', ru)

type EcDatePickerProps = {
  date: Date | null;
  setDate: (date: Date | null) => void;
  label: string;
  placeholder: string;
  validation?: FormFieldValidation;
  fetched?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
}

export const EcDatePicker = (props: EcDatePickerProps) => {
  const {date, setDate, label, placeholder, validation, fetched, minDate, maxDate} = props;
  const [dirty, setDirsty] = useState(false);
  const [touched, setTouched] = useState(false);
  const datepickerRef = useRef<ReactDatePicker | null>(null);

  useEffect(() => {
    if(fetched) {
      handleChange(date)
    };
  }, [fetched]);

  const handleChange = (value: Date | null) => {
    setTouched(true)
    if(!dirty) {
      setDirsty(true);
    }
    let isInvalid = false;
    if(validation) {
      console.log(value)
      isInvalid = validation.validator(value);
    } else {
      isInvalid = false;
    }

    validation && validation.setInvalid(isInvalid);

    setDate(value);
  };

  const handleClick = (e: React.MouseEvent) => {
    if(datepickerRef.current) {
      datepickerRef.current.isCalendarOpen() && e.preventDefault();
    }
  }

  return (
    <div className="container">
      <label className='datepicker' onClick={handleClick}>
        <div className='datepicker__label'>{label}</div>
        <div className="datepicker__picker-wrapper">
          <div className='datepicker__picker'>
            <DatePicker
              maxDate={maxDate}
              minDate={minDate}
              showYearDropdown
              showMonthDropdown
              isClearable
              onBlur={() => setTouched(true)}
              locale="ru"
              dateFormat="dd/MM/yyyy"
              ref={datepickerRef}
              placeholderText={placeholder}
              selected={date}
              customInput={<MaskedInput mask={'99/99/9999'} />}
              onChange={handleChange}
              className={`datepicker__control ${validation?.invalid && dirty && touched && 'datepicker__control--invalid'}`}/>
          </div>
          <div className={`datepicker__icon-container ${validation?.invalid && dirty && touched && 'datepicker__icon-container--invalid'}`}>
            <img src={require('../../calendar.png')} alt="calendar" className='datepicker__icon'/>
          </div>
        </div>
      </label>
      <div className="datepicker__error-container">
        {validation?.invalid && dirty && touched && <div className='datepicker__error'>{validation.errorMessage}</div>}
      </div>
    </div>
  );
};
