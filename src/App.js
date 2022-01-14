import styled from "styled-components";
import Hero from "./Components/Hero";
import PictureGrid from "./Components/PictureGrid";

const Container = styled.div`
  margin: 4rem 10rem;
  padding: 0.5rem 2rem 2rem 2rem;
  background-color: #e2e1e0;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
`;
const App = () => {
  return (
    <Container>
      <Title>SPACESTAGRAM</Title>
      <Hero />
      <PictureGrid />
    </Container>
  );
};

export default App;
