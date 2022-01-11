import "./App.css";
import Apod from "./Components/Apod";
import PictureGrid from "./Components/PictureGrid";

const App = () => {
  return (
    <div className="App">
      <h1>Spacetagram</h1>
      <Apod />
      <PictureGrid />
    </div>
  );
};

export default App;
