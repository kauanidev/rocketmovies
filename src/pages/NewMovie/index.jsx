import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { TagSelector } from "../../components/TagSelector";
import { Textarea } from "../../components/Textarea";
import { ActionsContainer, Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";

export const NewMovie = () => {
  return (
    <Container>
      <Header />
      <section className="container">
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <h1>Novo filme</h1>
        <form>
          <Input placeholder="Título" />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            min={0}
            max={5}
          />
          <Textarea placeholder="Observações" />
          <TagSelector />
          <ActionsContainer>
            <Button variant="dark">Cancelar</Button>
            <Button>Salvar</Button>
          </ActionsContainer>
        </form>
      </section>
    </Container>
  );
};
