import styled from "styled-components";

export const Container = styled.textarea`
  resize: none;
  background: ${({ theme }) => theme.gray300};
  border: none;
  color: ${({ theme }) => theme.gray200};
  padding: 1.6rem;
  border-radius: 10px;
  font-size: 1.6rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }
`;
