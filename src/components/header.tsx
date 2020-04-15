import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName='active'>Login</NavLink>
      <NavLink to="/app" activeClassName='active'>Main Screen</NavLink>
      <NavLink to="/demo" activeClassName='active'>Demo</NavLink>
    </div>
  )
}