import React, {useState} from 'react';
import 'ui-neumorphism/dist/index.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { mdiLightbulb, mdiLightbulbOn } from '@mdi/js';
import Program from './Program/Program';
import PlanList from './PlanList/PlanList';
import Food from './Food/Food';
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';
import { IconButton } from 'ui-neumorphism';
import Icon from '@mdi/react';
import './Global.css';
import './App.css';

const routes = [
  {
    path: '/',
    component: Program
  },
  {
    path: '/program',
    component: Program
  },
  {
    path: '/planlist',
    component: PlanList
  },
  {
    path: '/food',
    component: Food
  },
  {
    path: '/notification',
    component: Notification
  },
  {
    path: '/profile',
    component: Profile
  }
];

function App() {

  const [theme, setTheme] = useState('light');
  const [iconName, setName] = useState(mdiLightbulb);

  function ToggleButton() {
    iconName === mdiLightbulb ? setName(mdiLightbulbOn) : setName(mdiLightbulb);
    theme === 'light' ? setTheme('dark') :  setTheme('light');
  }

  return (
    <div className={`App ${theme}`}>
    <IconButton size='small' onClick={ToggleButton}>
      <Icon path={iconName} size={0.8} />
    </IconButton>
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) =>
          <Route key={index} exact path={route.path} component={route.component} />
        )}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
