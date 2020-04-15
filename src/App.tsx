import React, {useState, useEffect, useContext} from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {EcDatePicker} from './toolkit/ec-datepicker/ec-datepicker';
import {EcSelect, PickerOption} from './toolkit/ec-select/ec-select';
import {EcMultiSelect} from './toolkit/ec-multi-select/ec-multi-select';
import {EcInput} from './toolkit/ec-input/ec-input';
import {EcForm} from './toolkit/ec-form/ec-form';
import {EcButton} from './toolkit/ec-button/ec-button';
import {useTestFormFields, useTestFormValidation} from './fields';
import {observer} from 'mobx-react';
import {EcMaskedInput} from './toolkit/ec-masked-input/ec-masked-input';
import {EcCheckbox} from './toolkit/ec-checkbox/ec-checkbox';
import {EcRadio} from './toolkit/ec-radio/ec-radio';
import {EcRadioGroup} from './components/ec-radio-group/ec-radio-group';
import {EcAccordion} from './toolkit/ec-accordion/ec-accordion';
import {StoresContext} from './stores';
import {EcModal} from './toolkit/ec-modal/ec-modal';
import {EcTooltip} from './toolkit/ec-tooltip/ec-tooltip';
import {EcToast} from './toolkit/ec-toast/ec-toast';
import {Router, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './protected-route';
import {LoginScreen} from './screens/login-screen';
import {MainScreen} from './screens/main-screen';
import {ProtectedScreen} from './screens/protected-screen';
import {history} from './history';
import {Header} from './components/header';
import {Demo} from './screens/demo';
const data = [
  {
    value: '1',
    label: 'First line'
  },
  {
    value: '2',
    label: 'Second line'
  },
  {
    value: '3',
    label: 'Third line'
  },
  {
    value: '4',
    label: 'Fourth line'
  },
];

export const App = () => {
//   const {values, setters} = useTestFormFields();
//   const {validation, invalid} = useTestFormValidation();
//   const {notificationController} = useContext(StoresContext);
// const [fetched, setFetched] = useState(false);
//   const [selectedId, setSelectedId] = useState('');
//   const [confirmed, setConfirmed] = useState(false);
  

  // const addHint = (message: string) => {
  //   // const content = <div>bhbahjsbfajhsdfjahdfajhsdf dfhadsjhfjsdh</div>
  //   notificationController.show(message);
  // }
  // const [activeIndex, setActiveIndex] = useState('');
  // попап тултип notification интерсептор abort controller rxjs?
  return (
    <div className="App">
      <Router history={history}>
          <Switch>
            
            <Route path="/" exact component={LoginScreen} />
           
              <Route path='/app' component={ProtectedScreen}/>
              <Route path='/demo' component={Demo} />
            
            {/* <Route exact path="/" component={LoginScreen}/>
            <Route path='/app' component={MainScreen}></Route>
            <PrivateRoute path='/protected' component={ProtectedScreen}/> */}
          </Switch>
      </Router>
      {/* <EcButton onClick={() => addHint('1  message messagemes sage message')}>Show popup</EcButton>
      <EcButton onClick={() => addHint('2 message')}>Show popup</EcButton>
      <EcButton onClick={() => addHint('3 message')}>Show popup</EcButton>
      <EcButton onClick={() => addHint('4 message')}>Show popup</EcButton>
      <EcButton onClick={() => addHint('5 message')}>Show popup</EcButton>
      <EcToast /> */}
    </div>
  );
};

  

