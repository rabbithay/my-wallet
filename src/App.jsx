import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Login from './pages/signIn';
import Register from './pages/signUp';
import HomePage from './pages/home';
import NewExpense from './pages/newExpense';
import NewIncome from './pages/newIncome';

import GlobalStyle from './styles/GlobalStyle';
// import UserContext from './contexts/UserContext';

export default function App() {
  // const [user, setUser] = useState('');

  return (
  // <UserContext.Provider value={{ user, setUser }}>
    <Router>
      <GlobalStyle />
      <Switch>
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
      </Switch>
    </Router>
  // </UserContext.Provider>
  );
}
