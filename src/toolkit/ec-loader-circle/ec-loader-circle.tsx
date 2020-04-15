import React from 'react';
import './ec-loader-circle.scss';

type EcLoaderCircleProps = {
  big?: boolean;
}

export const EcLoaderCircle = (props: EcLoaderCircleProps) => {
  return (
    <div className={`spinner ${props.big && 'spinner--big'}`}></div>
  )
};