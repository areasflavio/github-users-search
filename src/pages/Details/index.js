import React, { useContext } from 'react';
import {
  MdArrowBack,
  MdPlace,
  MdWork,
  MdPeople,
  MdPeopleOutline,
  MdStar,
} from 'react-icons/md';
import { SiGit } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { FaFileCode } from 'react-icons/fa';
import PropTypes from 'prop-types';

import logo from '../../assets/logo-horizontal.svg';

import {
  Container,
  UserDetails,
  UserName,
  UserInfo,
  InfoItem,
  UserTotalRepos,
  ReposList,
  GithubInfo,
} from './styles';
import { UserContext } from '../../contexts/UserContext';

function Details({ history }) {
  const { user, setUser, setUsername } = useContext(UserContext);

  function handleGoBack() {
    history.push('/');

    setUser(null);
    setUsername(null);
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Github Search" />

        <MdArrowBack size={40} onClick={() => handleGoBack()} />
      </header>

      <UserDetails>
        <img src={user.avatar_url} alt={user.name} />

        <UserInfo>
          <UserName>
            <h1>{user.name}</h1>@{user.login}
          </UserName>

          <div>
            {user.location && (
              <InfoItem>
                <MdPlace size={16} />
                <small>{user.location}</small>
              </InfoItem>
            )}
            {user.company && (
              <InfoItem>
                <MdWork size={16} />
                <small>{user.company}</small>
              </InfoItem>
            )}
            {user.followers && (
              <InfoItem>
                <MdPeople size={16} />
                <small>{user.followers}</small>
              </InfoItem>
            )}
            {user.following && (
              <InfoItem>
                <MdPeopleOutline size={16} />
                <small>{user.following}</small>
              </InfoItem>
            )}
            {user.totalStars > 0 && (
              <InfoItem>
                <MdStar size={16} />
                <small>{user.totalStars}</small>
              </InfoItem>
            )}
          </div>
        </UserInfo>

        <UserTotalRepos>
          Total Repositories
          <strong>
            <SiGit size={24} />

            {user.public_repos}
          </strong>
        </UserTotalRepos>
      </UserDetails>

      <ReposList>
        {user.repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="__blank" rel="noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>

            <GithubInfo>
              <div>
                <MdStar size={16} />
                {repo.stargazers_count}
              </div>

              <div>
                <BiGitBranch size={16} />
                {repo.forks_count}
              </div>

              {repo.language && (
                <div>
                  <FaFileCode size={16} />
                  {repo.language}
                </div>
              )}
            </GithubInfo>
          </li>
        ))}
      </ReposList>
    </Container>
  );
}

Details.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Details;
