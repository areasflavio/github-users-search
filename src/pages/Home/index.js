import React, { useContext } from 'react';
import { ImSpinner8 } from 'react-icons/im';

import logo from '../../assets/logo-vertical.svg';
import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

function Home() {
  const { setUsername, loading, error } = useContext(UserContext);

  function handleSearch(event) {
    event.preventDefault();

    const { value } = event.target[0];

    setUsername(value);
  }

  return (
    <Container>
      <img src={logo} alt="Github Search" />

      <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder="Enter user name" enterKeyHint="send" />
        {error && <span>User not found</span>}

        <button type="submit">
          {loading ? <ImSpinner8 size={20} color="#fff" /> : <>Search</>}
        </button>
      </form>
    </Container>
  );
}

export default Home;
