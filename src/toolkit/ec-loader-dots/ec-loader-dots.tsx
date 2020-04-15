import React from 'react';
import './ec-loader-dots.scss';

type EcLoaderDotsProps = {
  size?: 'sm' | 'lg';
}

export const EcLoaderDots = (props: EcLoaderDotsProps) => {
  return (
    <div className={'lds-ellipsis ' + props.size}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
};