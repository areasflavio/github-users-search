import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';

import DefaultLayout from './pages/_layouts/Default';
import Routes from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DefaultLayout>
        <UserProvider>
          <Routes />
        </UserProvider>
      </DefaultLayout>
    </BrowserRouter>
  );
}
