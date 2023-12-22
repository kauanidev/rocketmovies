import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Headline, MoviesList } from "./styles";
import { MovieCard } from "../../components/MovieCard";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Headline className="container">
        <h2>Meus filmes</h2>
        <Button onClick={() => navigate("/new-movie")}>
          <FiPlus />
          Adicionar filme
        </Button>
      </Headline>
      <MoviesList className="container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MoviesList>
    </Container>
  );
};
