import { Container, InputGroup, ProfilePicture } from "./styles";
import { Link } from "../../components/Link";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Profile = () => {
  return (
    <Container>
      <header>
        <div className="container">
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </div>
      </header>
      <form>
        <ProfilePicture>
          <img src="https://github.com/kauanidev.png" alt="Foto do usuário" />
          <Button>
            <FiCamera />
          </Button>
        </ProfilePicture>
        <InputGroup>
          <Input type="text" icon={<FiUser />} placeholder="Nome" />
          <Input type="email" icon={<FiMail />} placeholder="E-mail" />
        </InputGroup>
        <InputGroup>
          <Input type="password" icon={<FiLock />} placeholder="Senha atual" />
          <Input type="password" icon={<FiLock />} placeholder="Nova senha" />
        </InputGroup>
        <Button disabled>Salvar</Button>
      </form>
    </Container>
  );
};
