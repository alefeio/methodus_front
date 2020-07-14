import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
`;

export const Prod = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 10px;
    text-align: center;

    div {
      padding: 0;
      margin: 0;
      text-align: center;

      img {
        width: 50%;
      }
    }
  }

  div {
    border-radius: 4px;
    width: 100%;
    text-align: center;
    padding: 20px;

    img {
      height: 80%;
      width: 80%;
    }

    h1 {
      font-size: 24px;
    }

    ul {
      margin-bottom: 10px;

      li {
        padding: 3px 0;
      }
    }

    h3 {
      margin-top: 10px;
    }

    h1 {
      margin-bottom: 25px;
    }
  }

  div:first-child {
    background: none;
    margin: 0;
    padding: 0;
  }
`;

export const Barra = styled.div`
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;

  ul {
    display: flex;
  }

  ul li {
    margin: 2px;
    padding: 5px 2px;
  }

  ul li a {
    color: #4d4d4d;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 720px) {
    form {
      width: 100%;
    }
  }

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  form {
    margin: 0 auto;
    width: 90%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    border: 1px solid #ddc063;
    border-radius: 4px;
    padding: 10px;

    input {
      background: #ffe393;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    textarea {
      background: #ffe393;
      border: 0;
      border-radius: 4px;
      height: 100px;
      padding: 10px 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
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
      background: #ddc063;
      font-weight: bold;
      color: #111;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#ddc063')};
      }
    }

    a {
      color: #4c4738;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
