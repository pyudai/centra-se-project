import React from 'react';
import './style/theme.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginAdmin from "./pages/Login-Admin";
import LoginStaff from "./pages/Login-Staff";
import Room from "./pages/Room";
import Employee from "./pages/Employee";
import Reserve from "./pages/Reserve";
import Food from './pages/Food';
import Checkin from "./pages/Checkin";
import CheckinProvider from './data/CheckinContext';
import ChooseLogin from './pages/ChooseLogin';
import HomeA from './pages/Home-Admin';
import HomeS from './pages/Home-Staff';

function App() {
  return (
    <div className="font-prompt">
      <Router>
          <CheckinProvider>
        <Switch>
          <Route exact path="/Employee" component={Employee} />
          <Route exact path="/Food" component={Food} />
          <Route exact path="/Reserve" component={Reserve} />
          <Route exact path="/LoginAdmin" component={LoginAdmin} />
          <Route exact path="/LoginStaff" component={LoginStaff} />
          <Route exact path="/Room" component={Room} />
          <Route exact path="/Checkin" component={Checkin} />
          <Route exact path="/HomeAdmin" component={HomeA}/>
          <Route exact path="/HomeStaff" component={HomeS}/>
          <Route path="/" component={ChooseLogin} />
        </Switch>
          </CheckinProvider>
      </Router>

    </div>
  );
}

export default App;
