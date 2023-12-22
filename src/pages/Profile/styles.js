import styled from "styled-components";

export const Container = styled.main`
  header {
    background: ${({ theme }) => theme.backgroundCard};
    height: 14.4rem;
    display: flex;
    align-items: center;
  }

  form {
    max-width: 34rem;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ProfilePicture = styled.div`
  position: relative;
  width: max-content;
  margin: 0 auto;
  margin-top: calc(-18.6rem / 2);
  margin-bottom: 6.4rem;

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin: 0 auto;
  }

  button {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & + & {
    margin: 2.4rem 0;
  }
`;
