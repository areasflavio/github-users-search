import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(3600deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 25%;

  form {
    min-width: 100%;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    margin-top: 3rem;

    background: inherit;
    color: #b2b2b2;

    border: none;
    border-bottom: 0.125rem solid #8752cc;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    text-align: center;
  }

  button {
    width: 100%;
    height: 2.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 3rem;
    border-radius: 0.25rem;

    background: #8752cc;
    color: #ffffff;

    font-weight: bold;
    font-size: 1rem;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.05, '#8752cc')};
    }

    svg {
      animation: ${spin} 5s linear infinite;
    }
  }

  span {
    color: #ff7250;
    font-weight: bold;
    font-size: 0.75rem;

    margin-top: 0.25rem;
  }
`;
