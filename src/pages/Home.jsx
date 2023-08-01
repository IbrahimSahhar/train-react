import React from "react";
import { styled } from "styled-components";
import { ContainerStyled } from "../Global/Components";
import { RefComponent } from "../components/RefComponent";

const H1Styled = styled.div`
  font-size: ${(props) => props.theme.fontSize.h1}px;
`;

const Home = () => {
  return (
    <ContainerStyled>
      <H1Styled>This Is the home page </H1Styled>
      <RefComponent />
    </ContainerStyled>
  );
};

export default Home;
