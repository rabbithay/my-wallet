import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './contexts/UserContext';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './Routes';

export default function App() {
  const [userInfo, setUserInfo] = useLocalStorage('@my-wallet-user', {});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </UserContext.Provider>

  );
}
