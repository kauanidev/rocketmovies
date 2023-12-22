import styled from "styled-components";

export const Container = styled.main`
  > section {
    height: 100%;
    max-height: calc(100vh - 11.6rem);
    overflow-y: auto;

    > a {
      margin: 4rem 0 2.4rem 0;
    }

    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 4rem 0 4rem 0;

    input,
    textarea {
      font-family: "Roboto", sans-serif;
    }

    > textarea {
      grid-column: 1/-1;
      min-height: 20rem;
    }
  }
`;

export const ActionsContainer = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;
