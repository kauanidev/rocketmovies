import styled from "styled-components";

export const Container = styled.section`
  grid-column: 1/-1;

  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.gray200};
  }

  > div {
    display: flex;
    background: ${({ theme }) => theme.gray400};
    width: 100%;
    padding: 1.6rem;
    border-radius: 8px;
    gap: 2.4rem;
  }
`;

export const Tag = styled.div`
  padding: 1.6rem;
  background: ${({ theme }) => theme.gray300};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export const NewTag = styled.div`
  padding: 1.6rem;
  border: 2px dashed ${({ theme }) => theme.gray250};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.gray200};

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
