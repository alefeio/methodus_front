import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const ModUl = styled.ul`
  display: flex;
`;

export const ModUl2 = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Prod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px;

    div {
      padding: 0;
      margin: 0;
      border-left: 0;

      img {
        width: 50%;
      }
    }
  }

  div {
    width: 100%;
    padding: 0 2rem;

    h1 {
      font: 28px Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: green;
    }

    h3 {
      margin-left: 1rem;
      color: green;
    }

    ul {
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 7px;
        margin: 3px;
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;

        a {
          display: flex;
          align-items: center;

          small {
            color: green;
            font-size: 1.1rem !important;
            margin: 0 0 0 0.5rem;
          }

          img {
            margin-left: 1rem;
            width: 15px;
          }
        }

        a:hover {
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
  }

  div:first-child {
    border-left: 0;
  }
`;

export const Default = styled.small`
  border: 0;
  padding: 0.8rem;
  background: #004b85;
  border-radius: 4px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
`;

export const Danger = styled.small`
  border: 0;
  padding: 0.8rem;
  background: red !important;
  border-radius: 4px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
`;

export const Titulo = styled.h1`
  font: 24px Georgia, 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: green;
  margin-bottom: 1rem !important;
  margin-top: 3rem !important;
`;
