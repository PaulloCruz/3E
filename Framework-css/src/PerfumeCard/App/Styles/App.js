import styled from "styled-components";

const cores = {
  darkcyan: "hsl(158, 36%, 37%)",
  cream: "hsl(30, 38%, 92%)",
  Verydarkblue: "hsl(212, 21%, 14%)",
  Darkgrayishblue: "hsl(228, 12%, 48%)",
  White: "hsl(0, 0%, 100%)",
};

export const Container = styled.section`
  width: 800px;
  height: 600px;
  background-color: ${cores.White};
  border-radius: 15px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column; 
  }
`;
export const Imagem = styled.img`
  width: 50%;
  border-radius: 15px 0px 0px 15px;
`;

export const Produto = styled.p`
  font-size: 16px;
  color: ${cores.Darkgrayishblue};
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
`;

export const InfoContainer = styled.div`
  margin: 15px;
`;

export const Titulo = styled.h1`
  font-size: 16px;
  color: ${cores.Darkgrayishblue};
  font-weight: 700;
  font-family: "Farunces", serif;
`;
export const botao = styled.button`
  background-color: ${cores.darkcyan};
  height: 40px;
  width: 250px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family:"Montserrat",sans-serif;
  font-weight:700;
  color: ${color.white};

  &:hover {
    filter: brightness(0.8);
  }
`;
