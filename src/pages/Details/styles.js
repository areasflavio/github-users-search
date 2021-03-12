import styled from 'styled-components';
import { darken } from 'polished';

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

      transition: all 0.2s;

      &:hover {
        cursor: pointer;

        color: ${darken(0.25, '#b2b2b2')};
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
  padding: 5rem 0;

  color: #b2b2b2;

  img {
    width: 14.125rem;
    height: 14.125rem;
    border-radius: 50%;
  }

  svg {
    color: #8752cc;
  }

  @media (max-width: 1240px) {
    & {
      flex-direction: column;
      padding: 2rem 0;

      img {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 584px) {
    & {
      img {
        width: 10.125rem;
        height: 10.125rem;
      }
    }
  }
`;

export const UserInfo = styled.div`
  section {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1240px) {
    & {
      section {
        align-items: center;
        margin-bottom: 2rem;
      }

      div {
        justify-content: center;
      }
    }
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

  a {
    text-decoration: none;
    color: inherit;

    transition: all 0.2s;

    &:hover {
      color: ${darken(0.25, '#b2b2b2')};
    }
  }

  @media (max-width: 1240px) {
    & {
      align-items: center;
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;

  small {
    text-align: center;
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
  grid-template-columns: repeat(auto-fit, minmax(17.625rem, 1fr));
  grid-gap: 1.5625rem;

  li {
    display: flex;
    flex-direction: column;

    padding: 1rem 1.1875rem 0.5rem;
    border-radius: 0.3rem;

    color: #b2b2b2;
    background: #201f1f;

    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      z-index: 1;
    }

    a {
      text-decoration: none;
      color: #b2b2b2;

      font-size: 1.125rem;
      line-height: 1.3125rem;

      margin-bottom: 0.5rem;

      position: relative;

      &:hover {
        &::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          height: 2px;
          width: 100%;
          background: #8752cc;
          border-radius: 50%;
        }
      }
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

  @media (max-width: 412px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
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

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #201f1f;
  padding: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: #b2b2b2;
    margin: 0 0.25rem;

    transition: all 0.2s;

    &:hover {
      color: #8752cc;
    }
  }
`;
