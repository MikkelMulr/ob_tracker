import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
