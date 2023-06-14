import styled from "styled-components";

interface iGlobal {
  title?: string;
  bg?: string;
}

const GlobalProvider: React.FC<iGlobal> = ({ title, bg }) => {
  return (
    <div>
      <Container bg={`${bg}`}>{title}</Container>
    </div>
  );
};

export default GlobalProvider;

const Container = styled.div<{
  bg: string;
}>`
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
`;
