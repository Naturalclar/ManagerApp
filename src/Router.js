// Router.js lists all the routers
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => { console.log('right'); }}
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
