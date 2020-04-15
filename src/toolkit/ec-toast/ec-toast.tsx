import React, {useContext} from 'react';
import {observer} from 'mobx-react';
import {StoresContext} from '../../stores';
import './ec-toast.scss';

export const EcToast = observer(() => {
  const {notificationController: {notifications, deleteMessage}} = useContext(StoresContext)
  return (
    <div className="notification">
      {
        notifications.map((item, index)=> {
          return <div className="notification__message" key={index}>
                   {item}
                   <span onClick={() => deleteMessage(index)} className="notification__close">x</span>
                 </div>
        })
      }
    </div>
  )
  
});