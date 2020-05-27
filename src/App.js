import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/App/Home';

function App() {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
    </Router>
  );
}

export default App;
