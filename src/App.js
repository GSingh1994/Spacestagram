import styled from "styled-components";
import Apod from "./Components/Apod";
import PictureGrid from "./Components/PictureGrid";

const Title = styled.h1`
  font-size: 1.8rem;
`;
const App = () => {
  return (
    <div className="App">
      <Title>Spacetagram</Title>
      <Apod />
      <PictureGrid />
    </div>
  );
};

export default App;
