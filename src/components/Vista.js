import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-radius: 20px;
  background-color: #fff;
  width: 80%;
  height: 90%;
  overflow: hidden;
  box-shadow: 0px 0px 16px 2px #d7d7d7;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    reverse
  }
`;

const Contenedor = styled.div`
  background-color: #dce2f0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Vista = ({ children }) => {
  return (
    <Contenedor>
      <Pagina>{children}</Pagina>
    </Contenedor>
  );
};

export default Vista;
