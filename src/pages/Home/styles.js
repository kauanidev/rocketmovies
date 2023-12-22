import styled from "styled-components";

export const Container = styled.main``;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem auto;

  > h2 {
    font-size: 3.2rem;
    font-weight: 400;
  }

  > button {
    max-width: 21rem;
  }
`;

export const MoviesList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 5rem;
  height: 100%;
  max-height: calc(100vh - 11.6rem - 15.6rem);
  overflow-y: auto;
`;
