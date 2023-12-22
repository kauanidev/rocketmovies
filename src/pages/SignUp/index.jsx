import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Container, Form, Image } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export const SignUp = () => {
  return (
    <Container>
      <Form>
        <h1>Rocketmovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>
        <h2>Crie sua conta</h2>
        <div>
          <Input type="text" icon={<FiUser />} placeholder="Nome" />
          <Input type="email" icon={<FiMail />} placeholder="E-mail" />
          <Input type="password" icon={<FiLock />} placeholder="Senha" />
          <Button>Cadastrar</Button>
        </div>
        <Link to="/sign-in">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Image src="/signup-bg.png" />
    </Container>
  );
};
