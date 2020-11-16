import React from 'react';
import './App.css';
import './style/theme.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChooseLogin from "./pages/ChooseLogin";
import LoginAdmin from "./pages/Login-Admin";
import LoginStaff from "./pages/Login-Staff";
import Check from "./pages/Checkin-out";
import Employee from "./pages/Employee";
import Reserve from "./pages/Reserve";
import Promotion from './pages/Promotion';

function App() {
  return (
    <div className="App font-prompt">
      <Router>
        <Switch>
          <Route exact path="/Checkin-out" component={Check} />
          <Route exact path="/Employee" component={Employee} />
          <Route exact path="/Promotion" component={Promotion} />
          <Route exact path="/Reserve" component={Reserve} />
          <Route exact path="/LoginAdmin" component={LoginAdmin} />
          <Route exact path="/LoginStaff" component={LoginStaff} />
          <Route path="/" component={ChooseLogin} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
