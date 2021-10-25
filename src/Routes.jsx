import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import Login from './pages/signIn';
import Register from './pages/signUp';
import HomePage from './pages/home';
import NewExpense from './pages/newExpense';
import NewIncome from './pages/newIncome';
import UserContext from './contexts/UserContext';

export default function Routes() {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
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
      </Switch>
    </UserContext.Provider>
  );
}
