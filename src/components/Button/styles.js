import styled, { css } from "styled-components";

export const Container = styled.button`
  height: 5.6rem;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === "dark" &&
    css`
      background: ${({ theme }) => theme.gray400};
      color: ${({ theme }) => theme.primary};

      &:not(:disabled):hover {
        filter: brightness(1.4);
      }
    `}
`;
