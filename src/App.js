import React from 'react';

import { UserProvider } from './contexts/UserContext';

import DefaultLayout from './pages/_layouts/Default';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <UserProvider>
          <Home />
        </UserProvider>
      </DefaultLayout>
    </>
  );
}
