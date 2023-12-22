import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 34rem;
  justify-content: center;
  margin: 0 auto;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.gray100};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    margin: 4.8rem 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;

    > button {
      margin-top: 1.6rem;
    }
  }

  > a {
    text-align: center;
    margin-top: 4rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
