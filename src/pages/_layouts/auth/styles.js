import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  h2 {
    color: white;
    margin: 2rem 0 1rem;
    font-weight: normal;
  }

  p {
    color: 999;
    font-size: 1.8rem;

    a {
      color: yellow;
      text-decoration: underline;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(255, 255, 255, 0.9);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(#333, 0.7);
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ffff00;
      font-weight: bold;
      color: #111;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#ffff00')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    img {
      width: 20px;
      margin-left: auto;
      margin-top: -40px;
      margin-right: 10px;
      margin-bottom: 25px;
    }
  }
`;
