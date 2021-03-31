import React from 'react';
import { BrowserRouter,Switch,Route,NavLink } from "react-router-dom";
import DashBoard from './DashBoard';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={DashBoard}/>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
