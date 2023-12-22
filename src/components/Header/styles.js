import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.gray250};
  height: 11.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    > h1 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.primary};
    }

    .input {
      flex: 1;
    }
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > p {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.white};
    }

    > a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.gray200};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.gray250};
    cursor: pointer;
  }
`;
