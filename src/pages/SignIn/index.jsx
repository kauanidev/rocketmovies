import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Container, Form, Image } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>Rocketmovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>
        <h2>Faça seu login</h2>
        <div>
          <Input type="email" icon={<FiMail />} placeholder="E-mail" />
          <Input type="password" icon={<FiLock />} placeholder="Senha" />
          <Button>Entrar</Button>
        </div>
        <Link to="/sign-up">Criar conta</Link>
      </Form>
      <Image src="/signup-bg.png" />
    </Container>
  );
};
