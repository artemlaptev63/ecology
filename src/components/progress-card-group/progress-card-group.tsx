import React from 'react';
import {ProgressCard} from '../progress-card/progress-card';
import './progress-card-group.scss'

type ProgressCardGroupProps = {
  data: {title: string, interest: number}[];
}

export const ProgressCardGroup = (props: ProgressCardGroupProps) => {
  return (
    <div className="progress-card-group">
      <div className="progress-card-group__container">
        {
          props.data.map((item, index) => {
            return <div className='progress-card-group__card'>
                    <ProgressCard key={index} title={item.title} interest={item.interest} 
                                  style={{marginRight: index === props.data.length - 1 ? '2rem' : '0'}}/>
                  </div>
          })
        }
      </div>
    </div>
  )
}