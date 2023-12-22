import { Container } from "./styles";

export const Link = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
