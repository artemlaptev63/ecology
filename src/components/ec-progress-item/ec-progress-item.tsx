import React, {useState, useEffect} from 'react';
import './ec-progress-item.scss';

type EcProgressItemProps = {
  title: string;
  interest: number;
}

export const EcProgressItem = (props: EcProgressItemProps) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    findOutStatus();
  }, []);

  const findOutStatus = () => {
    if(props.interest === 0) {
      setStatus('not-started')
      return;
    } else if (props.interest < 100) {
      setStatus('in-progress')
      return
    } else {
      setStatus('done')
    }
  }

  return (
    <div className="progress-item">
      <div className="progress-item__info">
        <span className={`progress-item__title progress-item__title--${status}`}>{props.title}</span>
        <span className={`progress-item__interest progress-item__interest--${status}`}>{props.interest} %</span>
      </div>
      <div className={`progress-item__indicator progress-item__indicator--${status}`} />
    </div>
  )
}