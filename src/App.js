import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterComponent from './components/RegisterComponent';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';


class App extends React.Component{

render(){
  return (
    <Router>
      <Switch>    
      <Route exact path="/">
          <Login/>
        </Route>    
        <Route exact path="/register">
          <RegisterComponent/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>        
      </Switch>
    </Router>
  );
}
}

export default App;
