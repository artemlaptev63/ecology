import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './ec-modal.scss';
import {StoresContext} from '../../stores';
import {observer} from 'mobx-react';

export const EcModal = observer(() => {
  const {popupController: {isVisible, content, hide}} = useContext(StoresContext);

  return ReactDOM.createPortal(
    <div className={`modal modal--${isVisible ? 'active' : ''}`} onClick={hide}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {content}
      </div>
      <div className="modal__close" onClick={hide}><span className='modal__close-btn'></span></div>
    </div>, 
    document.querySelector('#modal')!
  )
})