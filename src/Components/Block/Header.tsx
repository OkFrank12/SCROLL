import styled from "styled-components";
import { Link } from "react-scroll";
import Button from "../Static/Button";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);
  return (
    <div>
      {show ? (
        <Container style={{ backgroundColor: "white" }}>
          <Main>
            <Logo>Franklin</Logo>
            <NavsHolder>
              <Navs to="home" duration={500} smooth={true}>
                Home
              </Navs>
              <Navs to="about" duration={500} smooth={true}>
                About
              </Navs>
              <Navs to="contact" duration={500} smooth={true}>
                Contact
              </Navs>
              <Navs to="services" duration={500} smooth={true}>
                Services
              </Navs>
              <Navs to="features" duration={500} smooth={true}>
                Features
              </Navs>
            </NavsHolder>
            <Button />
          </Main>
        </Container>
      ) : (
        <Container>
          <Main>
            <Logo>Franklin</Logo>
            <NavsHolder>
              <Navs to="home" duration={500} smooth={true}>
                Home
              </Navs>
              <Navs to="about" duration={500} smooth={true}>
                About
              </Navs>
              <Navs to="contact" duration={500} smooth={true}>
                Contact
              </Navs>
              <Navs to="services" duration={500} smooth={true}>
                Services
              </Navs>
              <Navs to="features" duration={500} smooth={true}>
                Features
              </Navs>
            </NavsHolder>
            <Button />
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  position: fixed;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(Link)`
  margin: 0 20px;
  cursor: pointer;
`;
