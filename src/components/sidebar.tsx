import React from 'react';
import {withRouter, RouteComponentProps, NavLink} from 'react-router-dom';

export const Sidebar = withRouter((props: RouteComponentProps) => {
  const checkActive = () => {
    if (!props.location) return false;
    const {pathname} = props.location;
    const {url} = props.match;
    return pathname === url ? true : false;
  };

  return (
    <aside className="sidebar">
      <NavLink to={`${props.match.url}`} activeClassName="active" isActive={checkActive}>FirstNestedRoute</NavLink><br/>
      <NavLink to={`${props.match.url}/second-nested-route`} activeClassName="active">SecondNestedRoute</NavLink><br/>
      <NavLink to={`${props.match.url}/third-nested-route`} activeClassName="active">ThirdNestedRoute</NavLink>
    </aside>
  )
})