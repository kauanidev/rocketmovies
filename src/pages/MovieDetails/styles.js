import styled from "styled-components";

export const Container = styled.main`
  > section {
    height: 100%;
    max-height: calc(100vh - 11.6rem);
    overflow-y: auto;
    padding-bottom: 5rem;

    > a {
      margin-top: 4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;

export const TitleAndRate = styled.div`
  margin: 2.4rem 0 2.4rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  > div {
    font-size: 2.4rem;
    align-items: center;
    display: flex;
    gap: 0.3rem;
    color: ${({ theme }) => theme.primary};
    margin-top: 0.6rem;
  }
`;

export const CreationDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.gray250};
    }

    > svg {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Tags = styled.div`
  margin: 4rem 0 4rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > span {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    background: ${({ theme }) => theme.backgroundTag};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    border-radius: 8px;
  }
`;
