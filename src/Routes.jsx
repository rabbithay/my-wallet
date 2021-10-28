import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import UserContext from './contexts/UserContext';
import Login from './pages/signIn';
import Register from './pages/signUp';
import HomePage from './pages/home';
import NewExpense from './pages/newExpense';
import NewIncome from './pages/newIncome';

export default function Routes() {
  const { userInfo } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const [previousLocation, setPreviousLocation] = useState('');

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '/register' && !userInfo) {
      setPreviousLocation(location.pathname);
      history.push('/');
    }
    if (userInfo && location.pathname === '/') {
      if (previousLocation !== '/home' && previousLocation !== '') {
        history.push('/home');
        history.push(previousLocation);
      } else {
        history.push('/');
      }
    }
  }, [previousLocation, userInfo]);

  return (
    <Switch>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/new-income" exact>
        <NewIncome />
      </Route>
      <Route path="/new-expense" exact>
        <NewExpense />
      </Route>
    </Switch>
  );
}
