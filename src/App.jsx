import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './Routes';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}
