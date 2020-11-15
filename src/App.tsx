import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Check from "./pages/Checkin-out";
import Employee from "./pages/Employee";
import Promotion from "./pages/Promotion";
import Reserve from "./pages/Reserve";

function App() {
  return (
    <div className="App font-prompt bg-blue-200">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Checkin-out" component={Check} />
          <Route exact path="/Employee" component={Employee} />
          <Route exact path="/Promotion" component={Promotion} />
          <Route exact path="/Reserve" component={Reserve} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
