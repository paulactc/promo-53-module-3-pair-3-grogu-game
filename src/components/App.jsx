import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [name, setName] = useState("");
  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  return (
    <>
      <header className="header">
        <h1>¡Cuidado con Grogu {name}!</h1>
        <div>
          <h4> Introduce tu nombre</h4>
          <input
            type="text"
            onInput={handleInputName}
            placeholder="Escribe tu nombre"
          />
        </div>
      </header>
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
