import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.6rem;
  text-decoration: none;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: max-content;

  &:hover {
    filter: brightness(0.8);
  }
`;
