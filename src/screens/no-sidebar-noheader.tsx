import React, {useEffect, useContext} from 'react';
import {StoresContext} from '../stores';

export const NoSidebarNoHeader = () => {
  const {testStore} = useContext(StoresContext)

  useEffect(() => {
    testStore.hideHeader()

    return () => {
      testStore.showHeader()
    }
  }, [])
  return (
    <div className="content">
      <div className="main">NoSidebarNoHeader</div>
    </div>
  )
}