import boatImage from "./assets/boat.webp";
import boat from "./assets/boat.webp";
import Accordion from "./components/Accordion/Accordion.jsx";
import Icons from "./components/Icons/Icons.jsx";

function App() {
  return (
    <div className="app">
      <h1 className="visually-hidden">Accessible Accordion</h1>
      <Accordion />
      <Icons />
    </div>
  );
}

export default App;
