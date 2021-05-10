import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import ListCustomer from './pages/listCustomer/listCustomer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListCustomer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
