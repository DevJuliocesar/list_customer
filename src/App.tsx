import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import ListCustomer from './pages/user/listUser';
import ViewUser from './pages/user/viewUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListCustomer} />
        <Route exact path="/:id" component={ViewUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
