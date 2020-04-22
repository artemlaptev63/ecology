import React, {useContext, useState, useEffect, useRef} from 'react';
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
import {EcFileReader} from './toolkit/ec-file-reader/ec-file-reader';
import {EcProgressItem} from './components/ec-progress-item/ec-progress-item';
import {MyReportsTable} from './components/tables/my-reports/my-reports';
import {TaskTable} from './components/tables/list-of-tasks/list-of-tasks';
import {toJS} from 'mobx';
import {EcLoaderCircle} from './toolkit/ec-loader-circle/ec-loader-circle';
import {EcPagination} from './toolkit/ec-pagination/ec-pagination';

// Client ID: Iv1.34626e3143be67a9

// Client secret: f02e7fd4a97de71098327015ef2abf1b498f0bb2
export const App = observer(() => {
  const clientId = 'Iv1.34626e3143be67a9';
  const clientSecret = 'f02e7fd4a97de71098327015ef2abf1b498f0bb2'
  const {values, setters} = useTestFormFields();
  const {validation, invalid} = useTestFormValidation();
//   const {notificationController} = useContext(StoresContext);
// const [fetched, setFetched] = useState(false);
  const [value, setValue] = useState('');
//   const [confirmed, setConfirmed] = useState(false);

const {testStore, pagination} = useContext(StoresContext);

//     useEffect(() => {
//       if(value) {
//         getPredictions()
//       }
      
//     }, [value])

// const getData = (): Promise<any> => {
  
//     return wretch(`https://api.github.com/search/users`)
//     .signal(controllersService.getController(`https://api.github.com/search/users`))
//     .query({
//       q: 'ar',
//       client_id: clientId,
//       client_secret: clientSecret,
//     })
//     .get()
//     .json()
    
// }

// const getPredictions = throttle(1000, (): void => {
//   controllersService.abortRequests('https://api.github.com/search/users');

//   if ('value'.length < 3) {
//     return;
//   }

//   getData()
//     .then(res => {
//       console.log(res)
//     })
//     .catch(() => console.log('error'));
// });


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

  // const submit = () => {
  //   console.log(values.startDate, values.endDate)
  // }

  

  const [sortBy, setSortBy] = useState('')

  const data = [
    {
      id: '1',
      number: '1',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '2',
      number: '2',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '3',
      number: '3',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '4',
      number: '4',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '5',
      number: '5',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '6',
      number: '6',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '7',
      number: '7',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '8',
      number: '8',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '9',
      number: '9',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '10',
      number: '10',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '11',
      number: '11',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '12',
      number: '12',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '13',
      number: '13',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '14',
      number: '14',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '15',
      number: '15',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '16',
      number: '16',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '17',
      number: '17',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '18',
      number: '18',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '19',
      number: '19',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '20',
      number: '20',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '21',
      number: '21',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '22',
      number: '22',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '23',
      number: '23',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '24',
      number: '24',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '25',
      number: '25',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '26',
      number: '26',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '27',
      number: '27',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '28',
      number: '28',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '29',
      number: '29',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '30',
      number: '30',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '31',
      number: '31',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '32',
      number: '32',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '33',
      number: '33',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '34',
      number: '34',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '35',
      number: '35',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '36',
      number: '36',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '37',
      number: '37',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '38',
      number: '38',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '39',
      number: '39',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '40',
      number: '40',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '41',
      number: '41',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '42',
      number: '42',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '43',
      number: '43',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '44',
      number: '44',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '45',
      number: '45',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
    {
      id: '46',
      number: '46',
      purposeOfTheRoom: 'Иное (Административное с пристройкой)',
      address: 'Московская обл. Сергиево-Посадский р-н г. Хотьково ул. Дачная д. 1А',
      interest: 100,
    },
    {
      id: '47',
      number: '47',
      purposeOfTheRoom: 'Административные офисные учреждения',
      address: 'Московская обл. г. Коломна',
      interest: 100,
    },
  ]

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    pagination.setAllItems(data.length);
    pagination.calculatePages();
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      pagination.setData(data.splice(pagination.offset, pagination.limit));
      setLoading(false);
    }, 500)
  }, [pagination.offset]);

  return (
    <div className="main-greed">
      {loading ? <EcLoaderCircle /> : <><TaskTable data={pagination.data} title="Список заданий" 
                 setSelectedTasks={testStore.setSelectedTasks}
                 selectedTasks={testStore.selectedTasks}/>
                 <EcPagination activePage={pagination.activePage} allPages={pagination.allPages} setActivePage={pagination.setActivePage}/>
                 </>
      }
      {/* <EcInput value={value} valueChange={setValue} name="test" placeholder="test"/> */}
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

  

