import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.gray300};
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  gap: 1.6rem;

  > svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray200};
  }

  > input {
    flex: 1;
    height: 56px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.gray200};
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.gray200};
    }
  }
`;
