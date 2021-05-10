import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ListCustomer from './pages/listCustomer/listCustomer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListCustomer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
