import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './Users/pages/Users';
import Login from './Login/pages/login';
import SignUp from './SignUp/pages/SignUp';


const App = () => {
  return (
  <Router>
    <Switch>
    <Route path="/" exact>
<Users/>
    </Route>

    <Route path="/login/user" exact>
      <Login/>
    </Route>

    <Route path="/signup/user" exact>
      <SignUp/>
    </Route>

    <Redirect to = "/"/>
    </Switch>
  </Router>
  );
};

export default App;
