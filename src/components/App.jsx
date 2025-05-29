import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";

function App() {
  const [name, setName] = useState("");
  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  return (
    <>
      <Header />

      <main class="page">
        <section class="board">
          <div class="cell">
            <div class="grogu">👣</div>
          </div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </section>

        <section>
          <button class="dice">Lanzar Dado</button>
          <div class="game-status">En curso</div>
        </section>

        <section class="goods-container">
          <div class="goods-item">🍪</div>
          <div class="goods-item">🍪</div>
          <div class="goods-item">🍪</div>
        </section>
        <section class="goods-container">
          <div class="goods-item">🥚</div>
          <div class="goods-item">🥚</div>
          <div class="goods-item">🥚</div>
        </section>
        <section class="goods-container">
          <div class="goods-item">🐸</div>
          <div class="goods-item">🐸</div>
          <div class="goods-item">🐸</div>
        </section>
        <section>
          <button class="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
