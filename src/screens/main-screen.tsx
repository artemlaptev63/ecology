import React, {useEffect} from 'react';
import {NavLink, RouteComponentProps, Route, Switch} from 'react-router-dom';
import {FirstNestedComponent} from './first-nested-component';
import {SecondNestedComponent} from './second-nested-component';
import {ThirdNestedComponent} from './third-nested-component';
import Header from '../components/header';

export const MainScreen = ({match, location}: RouteComponentProps) => {

  const checkActive = () => {
    if (!location) return false;
    const {pathname} = location;
    const {url} = match;
    return pathname === url ? true : false;
  };

  useEffect(() => {
    console.log('call api')

    return () => console.log('app unmount')
  })

  return (
    <div className="main-greed">
      <div className="header">
        {/* <Header /> */}
      </div>
        <div className="content">
          <aside className="sidebar">
            <NavLink to={`${match.url}`} activeClassName="active" isActive={checkActive}>FirstNestedRoute</NavLink><br/>
            <NavLink to={`${match.url}/second-nested-route`} activeClassName="active">SecondNestedRoute</NavLink><br/>
            <NavLink to={`${match.url}/third-nested-route`} activeClassName="active">ThirdNestedRoute</NavLink>
          </aside>
          <main className="main">
            <Route exact path={`${match.url}/`} component={FirstNestedComponent} />
            <Route path={`${match.url}/second-nested-route`} component={SecondNestedComponent}/>
            <Route path={`${match.url}/third-nested-route`} component={ThirdNestedComponent} />
          </main>
        </div>
        <footer className="footer">Footer</footer>
    </div>
  );
};
