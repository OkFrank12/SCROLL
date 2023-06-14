import { useState } from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import { Link } from "react-scroll";

const Hero = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", onShow);
  return (
    <div id="home">
      {show ? (
        <Container>
          <Main>
            <Link to="home" duration={500} smooth={true}>
              <Button title="Go to Home" clr="white" bg="brown" w="150px" />
            </Link>
          </Main>
        </Container>
      ) : (
        <Container>
          <Main>
            <Link to="home" duration={500} smooth={true}>
              <Button title="Go Down" clr="white" bg="brown" w="150px" />
            </Link>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 79%;
  height: 100%;
`;
