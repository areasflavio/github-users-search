import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 25%;

  input {
    position: relative;
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

    margin-top: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    background: #8752cc;
    color: #ffffff;

    font-weight: bold;
    font-size: 1rem;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.05, '#8752cc')};
    }
  }
`;
