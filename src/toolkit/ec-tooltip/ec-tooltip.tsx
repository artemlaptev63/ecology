import React from 'react';
import {Tooltip, TooltipProps} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import './ec-tooltip.scss';

type EcTooltipProps = TooltipProps & {
  text: string;
};

export const EcTooltip = (props: EcTooltipProps) => {
  const {text, position = 'top', ...rest} = props;
  return (
    <Tooltip
      {...rest}
      title={text}
      position={position}
      trigger='mouseenter'
      arrow
      multiple
      theme="light"
      delay={300}
    >
      <div className="control">
        ?
      </div>
    </Tooltip>
  )
}