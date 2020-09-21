import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Router basename='/login-form'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/in'/>}/>
          <Route exact path='/in' component={LoginForm}/>
          <Route exact path='/up' component={LoginForm}/>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
