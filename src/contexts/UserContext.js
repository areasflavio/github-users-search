import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getGithubUser() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUser(response.data);

      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    if (username) {
      getGithubUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <UserContext.Provider value={{ user, setUsername, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
