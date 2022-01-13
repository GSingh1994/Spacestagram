import styled from "styled-components";
import Apod from "./Components/Apod";
import PictureGrid from "./Components/PictureGrid";

const Container = styled.div`
  margin: 4rem 10rem;
  padding: 2rem;
  background-color: #e2e1e0;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  background-color: #f38181;
`;
const App = () => {
  return (
    <Container>
      <Title>Spacetagram</Title>
      <Apod />
      {/* Astronomy photo of the day */}
      <PictureGrid />
    </Container>
  );
};

export default App;
