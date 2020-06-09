import React from 'react';
import Login from "./components/Login"
import Success from "./components/Success"
import { Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/success" component={Success}/>
      </Switch>
    </div>
  );
}

export default App;
