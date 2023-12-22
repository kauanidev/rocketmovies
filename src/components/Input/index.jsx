import { Container } from "./styles";

export const Input = ({ icon, ...rest }) => {
  return (
    <Container className="input">
      {icon}
      <input {...rest} />
    </Container>
  );
};
