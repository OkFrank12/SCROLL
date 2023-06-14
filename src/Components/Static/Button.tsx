import React from "react";
import styled from "styled-components";

interface iBtn {
  title?: string;
  w?: string;
  bg?: string;
  clr?: string;
}

const Button: React.FC<iBtn> = ({ title, w, bg, clr }) => {
  return (
    <div>
      <Container bg={`${bg}`} clr={`${clr}`} w={`${w}`}>
        <Main>{title}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  w: string;
  bg: string;
  clr: string;
}>`
  width: ${({ w }) => w};
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ clr }) => clr};
  border-radius: 20px;
  height: 40px;
  position: fixed;
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.09);
  }
`;

const Main = styled.div``;
