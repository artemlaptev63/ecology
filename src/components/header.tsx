import React, {useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {StoresContext} from '../stores';
import {observer} from 'mobx-react';

const Header = () => {

  const {testStore} = useContext(StoresContext);

  useEffect(() => {
    console.log('header 1')

    return () => console.log('header 0');
  })

  return (<>
    {
      testStore.isHeaderVisible && <div className="header">
                                  <NavLink exact to="/login" activeClassName='active'>Login</NavLink>
                                  <NavLink to="/app" activeClassName='active'>Main Screen with sidebar and header</NavLink>
                                  <NavLink to="/demo" activeClassName='active'>Demo with org info and header</NavLink>
                                  <NavLink to="/without-sidebar" activeClassName='active'>Without sidebar</NavLink>
                                  <NavLink to="/without-sidebar-and-header" activeClassName='active'>Without sidebar and header</NavLink>
                                </div>
    }
    </>
  )
}

export default observer(Header);