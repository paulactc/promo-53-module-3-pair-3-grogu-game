import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import Given from "./Given";
import Ware from "./Ware";
import Reset from "./Reset";

function App() {
  const [name, setName] = useState("");
  const [positionGrogu, setpositionGrogu] = useState(0);
  const [resultGiven, setresultGiven] = useState(0);
  const [statusGame, setstatusGame] = useState("Iniciar");
  const wares [(eggs: 1, 2, 3) (cookies: 1, 2, 3) (frog: 1, 2, 3)];


  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  return (
    <>
      <Header name={name} handleInputName={handleInputName} />
      <Board />

      <main class="page">
        <Given />
        <Ware />
        <Reset />
      </main>
    </>
  );
}

export default App;
