import React, {useContext, useState, useEffect} from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {Router, Switch, Route, withRouter} from 'react-router-dom';
import {LoginScreen} from './screens/login-screen';
import {ProtectedScreen} from './screens/protected-screen';
import {history} from './history';
import Header from './components/header';
import {Demo} from './screens/demo';
import {Loading} from './screens/loading';
import {NoSidebarNoHeader} from './screens/no-sidebar-noheader';
import {WithoutSidebar} from './screens/with-org-and-header';
import {StoresContext} from './stores';
import {observer} from 'mobx-react';
import {EcInput} from './toolkit/ec-input/ec-input';
import {defer, of, from, interval, Subject} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import wretch from 'wretch';
import {throttle} from 'throttle-debounce';
import {EcCheckbox} from './toolkit/ec-checkbox/ec-checkbox';
import {EcDateRange} from './toolkit/ec-date-range/ec-date-range';
import {useTestFormValidation, useTestFormFields} from './fields';
import {EcButton} from './toolkit/ec-button/ec-button';
import {EcTextarea} from './toolkit/ec-textarea/ec-textarea';
import {ProgressCard} from './components/progress-card/progress-card';
import {ProgressCardGroup} from './components/progress-card-group/progress-card-group';

// Client ID: Iv1.34626e3143be67a9

// Client secret: f02e7fd4a97de71098327015ef2abf1b498f0bb2
export const App = observer(() => {
  const clientId = 'Iv1.34626e3143be67a9';
  const clientSecret = 'f02e7fd4a97de71098327015ef2abf1b498f0bb2'
  const {values, setters} = useTestFormFields();
  const {validation, invalid} = useTestFormValidation();
//   const {notificationController} = useContext(StoresContext);
// const [fetched, setFetched] = useState(false);
  const [selectedId, setSelectedId] = useState('');
//   const [confirmed, setConfirmed] = useState(false);

// const {testStore} = useContext(StoresContext);

    // useEffect(() => {
    //   if(value) {
    //     getPredictions()
    //   }
      
    // }, [value])

const getData = (): Promise<any> => {
  
    return wretch(`https://api.github.com/search/users`)
    .signal(controllersService.getController(`https://api.github.com/search/users`))
    .query({
      q: 'ar',
      client_id: clientId,
      client_secret: clientSecret,
    })
    .get()
    .json()
    
}

const getPredictions = throttle(1000, (): void => {
  controllersService.abortRequests('https://api.github.com/search/users');

  if ('value'.length < 3) {
    return;
  }

  getData()
    .then(res => {
      console.log(res)
    })
    .catch(() => console.log('error'));
});
// const getData = () => {
//   return from()
//   const response = await fetch(`https://api.github.com/search/users?q=${value}&client_id=${clientId}&client_secret=${clientSecret}`);
//     const result = await response.json();
//     return result
// }
  

  // const addHint = (message: string) => {
  //   // const content = <div>bhbahjsbfajhsdfjahdfajhsdf dfhadsjhfjsdh</div>
  //   notificationController.show(message);
  // }
  // const [activeIndex, setActiveIndex] = useState('');
  // попап тултип notification интерсептор abort controller rxjs?

  const submit = () => {
    console.log(values.startDate, values.endDate)
  }



  return (
    <div className="main-greed">
      
      {/* <Router history={history}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Loading} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/app' component={ProtectedScreen}/>
            <Route path='/demo' component={Demo}/>
            <Route path='/without-sidebar' component={WithoutSidebar}/>
            <Route path="/without-sidebar-and-header" component={NoSidebarNoHeader} />
          </Switch>
      </Router> */}
    </div>
  );
});

class ControllersService {
	private controllersMap: Map<string, AbortController[]> = new Map();

	public getController = (url: string) => {
		const controller = new AbortController();
		this.addController(url, controller);

		return controller;
	};

	public abortRequests = (url: string) => {
		const controllers = this.controllersMap.get(url);

		if(controllers) {
			controllers.forEach(controller => {
				controller.abort();
			});
			this.clearControllers(url);
		}
	};

	private addController = (url: string, controller: AbortController) => {
		const controllers = this.controllersMap.get(url);

		if(controllers) {
			controllers.push(controller);
		} else {
			this.controllersMap.set(url, [controller]);
    }
	};

	private clearControllers = (url: string) => {
		this.controllersMap.set(url, []);
	}
}

export const controllersService = new ControllersService();

  

