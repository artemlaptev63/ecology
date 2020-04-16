import React, {useEffect, useContext} from 'react';
import {RouteComponentProps, Route} from 'react-router-dom';
import {FirstNestedComponent} from './first-nested-component';
import {SecondNestedComponent} from './second-nested-component';
import {ThirdNestedComponent} from './third-nested-component';
import {Sidebar} from '../components/sidebar';
import {Footer} from '../components/footer';
import {StoresContext} from '../stores';

export const ProtectedScreen = ({match}: RouteComponentProps) => {
  const {testStore} = useContext(StoresContext)


  useEffect(() => {
    console.log('Protected mount')

    return () => console.log('Protected unmount')
  }, [])

  
  return (
    <>
      <div className="content">
        <Sidebar />
        <main className="main">
          <Route exact path={`${match.url}/`} component={FirstNestedComponent} />
          <Route path={`${match.url}/second-nested-route`} component={SecondNestedComponent}/>
          <Route path={`${match.url}/third-nested-route`} component={ThirdNestedComponent} />
        </main>
      </div>
      <Footer />
    </>
  )
}