import React from 'react';
import {EcRadio} from '../ec-radio/ec-radio';

type EcRadioGroupProps = {
  values: {value: string, label: string}[];
  selectedId: string;
  groupName: string;
  onChange: (value: string) => void;
}

export const EcRadioGroup = (props: EcRadioGroupProps) => {

  const renderRadioButtons = () => {
    return props.values.map(item => {
      return <EcRadio key={item.value} name={props.groupName} 
                      value={item.value} label="Test" selectedId={props.selectedId}
                      onChange={props.onChange}/>
    })
  }
  return (
    <>{renderRadioButtons()}</>
  );
};