import React, {useState, useEffect, useRef} from 'react';
import './ec-accordion.scss';

type EcAccordionProps = {
  title: string;
  children: React.ReactNode;
  activeIndex?: string;
  setActive?: (index: string) => void;
  itemIndex?: string;
  modifire?: 'red' | 'yellow';
}

export const EcAccordion = (props: EcAccordionProps) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState('0px');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(content && content.current) {
      setHeight(`${content.current.scrollHeight}px`);
    }
  }, []);

  const isGroup = (): boolean => {
    return !!props.setActive && !!props.itemIndex;
  }

  const toggleState = () => {
    if(isGroup()) {
      console.log('adsdas')
      props.activeIndex === props.itemIndex ? props.setActive!('') : props.setActive!(props.itemIndex!);
    } else {
      setActive(!active)
    }
  }

  const isActive = isGroup() ? props.activeIndex === props.itemIndex : active;
  
  return (
    <div className="accordion">
      <div onClick={toggleState} className={`accordion__title-container accordion__title-container--${props.modifire}`}>
        <h1 className="accordion__title">{props.title}</h1>
        <div className={`accordion__shevron ${active && 'accordion__shevron--active'}`}>
          <img src={require('../../down.png')} alt="shevron"/>
        </div>
      </div>
      <div ref={content} className='accordion__content' style={{maxHeight: isActive ? height : '0px'}}>{props.children}</div>
    </div>
  );

};