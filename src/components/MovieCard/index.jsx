import { Container, StarsContainer, TagsContainer } from "./styles";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

export const MovieCard = () => {
  const tags = ["Ficção Científica", "Aventura", "Drama"];

  return (
    <Container>
      <h3>Interestellar</h3>
      <StarsContainer>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarOutline />
      </StarsContainer>
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma
        inteligência desconhecida que está enviando mensagens codificadas
        através de radiação gravitacional, deixando coordenadas em binário que
        os levam até uma instalação secreta da NASA liderada pelo professor John
        Brand. O cientista revela que um buraco de minhoca foi aberto perto de
        Saturno e que ele leva a planetas que podem oferecer condições de
        sobrevivência para a espécie humana. As missões Lázaro enviadas anos
        antes identificaram três planetas potencialmente habitáveis orbitando o
        buraco negro Gargântua: Miller, Edmunds e Mann, nomeados em homenagem
        aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a
        nave espacial Endurance e recuperar os dados dos astronautas; se um dos
        planetas se mostrar habitável, a humanidade irá seguir para ele na
        instalação da NASA, que é na realidade uma enorme estação espacial. A
        partida de Cooper devasta Murphy.
      </p>
      <TagsContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </TagsContainer>
    </Container>
  );
};
