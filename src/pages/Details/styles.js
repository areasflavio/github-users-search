import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 70%;
  height: 100%;

  margin: 2.5rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: #b2b2b2;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const UserDetails = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  min-width: 100%;
  margin: 0 auto;
  padding: 5rem 8rem;

  color: #b2b2b2;

  img {
    width: 9.125rem;
    height: 9.125rem;
    border-radius: 50%;
  }

  svg {
    color: #8752cc;
  }
`;

export const UserName = styled.main`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  line-height: 1.1875rem;

  margin-bottom: 1.25rem;

  h1 {
    color: #8752cc;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

export const UserInfo = styled.div`
  max-width: 14rem;

  div {
    display: flex;
    align-items: center;

    flex-wrap: wrap;
  }
`;

export const InfoItem = styled.div`
  display: flex;

  small {
    font-size: 1rem;
    line-height: 1.4rem;

    margin: 0 0.2rem;
  }
`;

export const UserTotalRepos = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1.1875rem;
  border-radius: 0.3rem;
  background: #201f1f;

  strong {
    display: flex;
    align-items: center;
    margin: 0.5rem auto 0;

    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.6875rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const ReposList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, minmax(17.625rem, 1fr));
  grid-gap: 1.5625rem;

  li {
    display: flex;
    flex-direction: column;

    padding: 1rem 1.1875rem 0.5rem;
    border-radius: 0.3rem;

    color: #b2b2b2;
    background: #201f1f;

    a {
      text-decoration: none;
      color: #b2b2b2;

      font-size: 1.125rem;
      line-height: 1.3125rem;

      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1rem;

      margin-bottom: 2rem;

      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 2rem;
    }
  }
`;

export const GithubInfo = styled.div`
  display: flex;
  align-items: center;

  margin-top: auto;

  div {
    display: flex;

    & + div {
      margin-left: 0.8rem;
    }

    svg {
      color: #8752cc;
      margin-right: 0.2rem;
    }
  }
`;
