import "./App.css";

import Content from "./components/UI/Content";
import Header from "./components/UI/Header";
import { useState, useEffect } from "react";

// round function that does the same as start game

function App() {
  const [tiles, setTiles] = useState([]);
  const [selection, setSelection] = useState([]);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  // check clicks
  useEffect(() => {
    if (selection.length === 3 && difficulty === 1) {
      checkPlay();
    } else if (selection.length === 2 && difficulty == 2) {
      checkPlay();
    }
  }, [selection, difficulty]);

  const checkPlay = () => {
    if (difficulty === 1) {
      const a = selection[0];
      const b = selection[1];
      const c = selection[2];

      return (
        a == b && b == c ? endGame("win") : endGame("lose"), setSelection([])
      );
    } else {
      const a = selection[0];
      const b = selection[1];

      return a == b ? endGame("win") : endGame("lose"), setSelection([]);
    }
  };

  const addPoint = () => {
    return setPoints((points) => points + 1);
  };

  // flip play card
  const handleFlip = (index) => {
    let arr = [...tiles];
    arr[index].flipped = true;
  };

  const setHighScore = () => {};

  const endGame = (value) => {
    if (value === "win") {
      return addPoint(), setHighScore();
    } else {
      return setIsGameOver(!isGameOver);
    }
  };

  return (
    <>
      <section className="app">
        <Header />
        <Content
          points={points}
          best={best}
          setBest={setBest}
          tiles={tiles}
          setTiles={setTiles}
          selection={selection}
          setSelection={setSelection}
          handleFlip={handleFlip}
          gameStart={gameStart}
          setGameStart={setGameStart}
          isGameOver={isGameOver}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </section>
    </>
  );
}

export default App;
