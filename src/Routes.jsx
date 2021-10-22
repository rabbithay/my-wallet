import { BrowserRouter as Route } from 'react-router-dom';
import React from 'react';

import Login from './pages/signIn';
import Register from './pages/signUp';
import HomePage from './pages/home';
import NewExpense from './pages/newExpense';
import NewIncome from './pages/newIncome';

export default function Routes() {
  return (
    <>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/new-income" exact>
        <NewIncome />
      </Route>
      <Route path="/new-expense" exact>
        <NewExpense />
      </Route>
    </>
  );
}
