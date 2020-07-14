import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Barra = styled.div`
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #004b85 !important;
  }
`;

export const Prod = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px;
    text-align: center;

    div {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: auto;

    span {
      font: 20rem Georgia, 'Times New Roman', Times, serif;
      color: #004b85;
      margin-bottom: 5rem;
    }

    button {
      border: 0;
      padding: 1rem 2rem;
      background: #004b85;
      border-radius: 4px;
      color: #fff;
      font-size: 2rem;
    }

    h1 {
      font: 28px Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: #004b85;
    }

    h3 {
      margin-left: 1rem;
      color: #004b85;
    }

    ul {
      margin-bottom: 10px;
      display: flex;

      li {
        padding: 7px;
        margin: 3px;
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    h3 {
      margin-top: 10px;
    }

    h1 {
      margin-bottom: 25px;
    }

    small {
      margin: 3rem 0 0;
    }

    img {
      width: 100%;
    }
  }

  div:first-child {
    border-left: 0;
    padding-bottom: 0;

    strong {
      width: 265px;
      height: 300px;
    }
  }
`;

export const Strong = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  color: #41ad49;

  img {
    margin-left: 1rem;
  }
`;
