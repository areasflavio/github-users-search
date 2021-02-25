import React, { useContext } from 'react';

import logo from '../../assets/logo-vertical.svg';
import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

function Home() {
  const { setUser } = useContext(UserContext);

  function handleSearch(event) {
    event.preventDefault();

    const { value } = event.target[0];

    setUser(value);
  }

  return (
    <Container>
      <img src={logo} alt="Github Search" />

      <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder="Enter user name" enterKeyHint="send" />

        <button type="submit">Search</button>
      </form>
    </Container>
  );
}

export default Home;
