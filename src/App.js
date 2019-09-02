import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
