import logo from "./logo.svg";
import "./App.css";
import "./components/Titulo.jsx";
import Titulo from "./components/Titulo.jsx";
import Subtitulo from "./components/Subtitulo";
import Lista from "./components/lista";

function App() {
  return (
    <div className="App">
      <Titulo />
      <Subtitulo />
      <Lista />
    </div>
  );
}

export default App;
