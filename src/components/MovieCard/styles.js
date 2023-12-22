import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundCard};
  padding: 3.2rem;
  border-radius: 16px;

  > h3 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  > p {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.gray200};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 1.6rem 0;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  gap: 0.3rem;
  margin-top: 0.8rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  > span {
    background: ${({ theme }) => theme.gray280};
    padding: 0.5rem 1.6rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
  }
`;
