import React from 'react';
import {Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isLoggedIn = false; //context
  return (
    <Route {...rest} render={props => isLoggedIn ? (<Component {...props} />) : 
                                                   (<Redirect to={{ pathname: "/"}}/>
    )}/>
  );
};