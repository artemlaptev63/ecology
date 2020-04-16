import React, {useEffect, useContext} from 'react';
import {StoresContext} from '../stores';

export const Demo = () => {
  const {testStore} = useContext(StoresContext)
 
  return (
    <div className="content">
      <div className="sidebar">Orginfo</div>
      <div className="main">WithOrgAndHeader</div>
    </div>
  )
}