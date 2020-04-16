import React, {ReactText} from 'react';
import './ec-button.scss'

type EcButtonProps = React.HTMLProps<HTMLButtonElement> & {
  children: ReactText;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  outline?: boolean;
  text?: boolean;
}

export const EcButton = (props: EcButtonProps) => {
  const {children, onClick, disabled, outline, type = 'button', text, ...rest} = props;
  return (
    <button {...rest} type={type} 
            className={`
              button 
              ${outline ? 'button--outline' : ''}
              ${text ? 'button--text' : ''}
            `} 
            onClick={onClick} disabled={disabled}>{children}</button>
  )
}