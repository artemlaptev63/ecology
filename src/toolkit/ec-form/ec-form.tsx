import React from 'react';

type EcFormProps = {
  children: React.ReactNode;
}

export const EcForm = ({children}: EcFormProps) => {
  return (
    <form onSubmit={e => e.preventDefault()}>{children}</form>
  );
};