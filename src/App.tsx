import React from 'react';
import './style/theme.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import ChooseLogin from "./pages/ChooseLogin";
=======

>>>>>>> 2f0da5406b40510ba1258fcf2b0dd8be5b6ab7b1
import LoginAdmin from "./pages/Login-Admin";
import LoginStaff from "./pages/Login-Staff";
import Room from "./pages/Room";
import Employee from "./pages/Employee";
import Reserve from "./pages/Reserve";
import Food from './pages/Food';
import Checkin from "./pages/Checkin";
import CheckinProvider from './data/CheckinContext';
<<<<<<< HEAD
import PopUp from './popupReserveFood';
import ReserveHis from './pages/ReserveHis';
=======
import ChooseLogin from './pages/ChooseLogin';
>>>>>>> 2f0da5406b40510ba1258fcf2b0dd8be5b6ab7b1

function App() {
  return (
    <div className="font-prompt">
      <Router>
<<<<<<< HEAD
        <CheckinProvider>
        < Switch>
            <Route exact path="/Employee" component={Employee} />
            <Route exact path="/Promotion" component={Promotion} />
            <Route exact path="/LoginAdmin" component={LoginAdmin} />
            <Route exact path="/LoginStaff" component={LoginStaff} />
            <Route exact path="/Room" component={Room} />
            <Route exact path="/checkin" component={Checkin} />
            
            <Route exact path="/Reserve" component={Reserve} />
            <Route exact path="/popupReservefood" component={PopUp} />

            
            <Route path="/" component={ChooseLogin} />
          </Switch>
        </CheckinProvider>
=======
          <CheckinProvider>
        <Switch>
          <Route exact path="/Employee" component={Employee} />
          <Route exact path="/Food" component={Food} />
          <Route exact path="/Reserve" component={Reserve} />
          <Route exact path="/LoginAdmin" component={LoginAdmin} />
          <Route exact path="/LoginStaff" component={LoginStaff} />
          <Route exact path="/Room" component={Room} />
          <Route exact path="/checkin" component={Checkin} />
          <Route path="/" component={ChooseLogin} />
        </Switch>
          </CheckinProvider>
>>>>>>> 2f0da5406b40510ba1258fcf2b0dd8be5b6ab7b1
      </Router>

    </div>
  );
}

export default App;
