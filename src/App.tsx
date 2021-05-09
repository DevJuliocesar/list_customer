import React from 'react';
import { Button } from 'antd';
import { Switch, Route } from 'react-router-dom';
import styled from 'styles/styled-components';
import logo from './logo.svg';
import './App.css';
import ListCustomer from './pages/listCustomer/listCustomer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;


  function App() {
  return (
    <AppWrapper>
    <Switch>
    <Route exact path="/" component={ListCustomer} />
    <Route path="/features" component={FeaturePage} />
    <Route component={NotFoundPage} />
  </Switch>
    </AppWrapper>
  );
}

export default App;
