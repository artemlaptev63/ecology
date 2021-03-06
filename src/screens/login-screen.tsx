import React, {useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {StoresContext} from '../stores';

export const LoginScreen = () => {
  const {testStore} = useContext(StoresContext)
  useEffect(() => {
    testStore.hideHeader()
    console.log('login mount')

    return () => {
      testStore.showHeader()
      console.log('login unmount')
    }
  }, [])
  return (
    <>
    <NavLink to="/app">To app</NavLink>
    <div>Login</div>
    </>
  )
}