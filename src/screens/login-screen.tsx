import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export const LoginScreen = () => {
  useEffect(() => {
    console.log('login mount')

    return () => console.log('login unmount')
  }, [])
  return (
    <>
    <NavLink to='/app' activeClassName="active">Protected</NavLink>
    <NavLink to='/demo' activeClassName="active">Demo</NavLink>
    <div>Login</div>
    </>
  )
}