import React, {useContext, useEffect} from 'react';
import {EcLoaderCircle} from '../toolkit/ec-loader-circle/ec-loader-circle';
import {Redirect} from 'react-router-dom';
import {history} from '../history';
import {StoresContext} from '../stores';

export const Loading = () => {
  const {testStore} = useContext(StoresContext)
  useEffect(() => {
    testStore.hideHeader()

    return () => {
      testStore.showHeader()
    }
  }, [])
  setTimeout(() => {
    
    history.push('/login');
  }, 5000)
  
  return (
    <EcLoaderCircle />
  )
}