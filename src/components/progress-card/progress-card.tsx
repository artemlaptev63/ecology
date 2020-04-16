import React, {useState, useEffect} from 'react';
import './progress-card.scss'

type ProgressCardProps = {
  title: string;
  interest: number;
  style: React.CSSProperties;
}

export const ProgressCard = (props: ProgressCardProps) => {

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

  const getStatus = () => {
    if(props.interest === 0) {
      return '';
    } else if (props.interest < 100) {
      return 'Формируется';
    } else {
      return 'Заполнен';
    }
  }

  return (
    <div className={`progress-card progress-card--${status}`} style={props.style}>
      <div className={`progress-card__title progress-card__title--${status}`}>{props.title}</div>
      <div className="progress-card__status-container">
        <div className={`progress-card__interest progress-card__interest--${status}`}>{`${props.interest} %`}</div>
        <div className={`progress-card__status progress-card__status--${status}`}>{getStatus()}</div>
      </div>
    </div>
  )
}