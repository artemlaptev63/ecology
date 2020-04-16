import React from 'react';
import {EcDatePicker} from '../ec-datepicker/ec-datepicker';
import './ec-date-range.scss';
import {FormFieldValidation} from '../../fields';

type EcDateRangeProps = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  startDateLabel: string;
  endDateLabel: string;
  startDateValidation?: FormFieldValidation;
  endDateValidation?: FormFieldValidation;
}

export const EcDateRange = (props: EcDateRangeProps) => {
  return (
    <div className="daterange">
      <EcDatePicker date={props.startDate} setDate={props.setStartDate} 
                    label="Start Date" placeholder="Start Date" maxDate={props.endDate}
                    validation={props.startDateValidation}/>
      <div className="daterange__divider"></div>
      <EcDatePicker date={props.endDate} setDate={props.setEndDate} 
                    label="End Date" placeholder="End Date" minDate={props.startDate}
                    validation={props.endDateValidation}/>
    </div>
  )
}