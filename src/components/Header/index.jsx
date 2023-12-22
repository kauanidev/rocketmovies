import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Link } from "../Link";
import { Container, UserDetails } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="container">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        <UserDetails>
          <div>
            <p>Kauani Lima</p>
            <Link to="/sign-in">sair</Link>
          </div>
          <img
            onClick={() => navigate("/profile")}
            src="https://github.com/kauanidev.png"
            alt="Foto do usuário"
          />
        </UserDetails>
      </div>
    </Container>
  );
};
