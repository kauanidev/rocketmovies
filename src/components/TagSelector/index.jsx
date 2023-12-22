import { Container, NewTag, Tag } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export const TagSelector = () => {
  return (
    <Container>
      <h3>Marcadores</h3>
      <div>
        <Tag>
          Comédia
          <FiX />
        </Tag>
        <NewTag>
          Novo marcador
          <FiPlus />
        </NewTag>
      </div>
    </Container>
  );
};
