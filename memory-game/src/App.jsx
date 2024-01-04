import "./App.css";
import Cards from "./components/UI/Cards";
import Header from "./components/UI/Header";
import Score from "./components/UI/Score";
import Start from "./components/UI/Start";
import GameOver from "./components/UI/GameOver";
import { useState, useEffect } from "react";

// user selects tile
// user selects second tile
// function compares tile
// if tiles match +1 point
// if tiles do not match game ends

function App() {
  const [tiles, setTiles] = useState([]);
  const [difficulty, setDifficulty] = useState();
  const [selection, setSelection] = useState([]);
  const [points, setPoints] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    checkClicks();
  }, [selection]);

  const checkPlayEasy = () => {
    const a = selection[0];
    const b = selection[1];
    const c = selection[2];

    return a == b && b == c ? addPoint() : setIsGameOver(true);
  };

  const checkClicks = () => {
    if (selection.length === 3) {
      checkPlayEasy();
      setSelection([]);
    }
  };

  const addPoint = () => {
    return setPoints((points) => points + 1);
  };

  return (
    <>
      <section className="app">
        <Header />
        <Score points={points} />
        {isGameOver ? (
          <GameOver />
        ) : (
          <>
            <Start setTiles={setTiles} setDifficulty={setDifficulty} />
            <Cards
              tiles={tiles}
              difficulty={difficulty}
              selection={selection}
              setSelection={setSelection}
            />
          </>
        )}
      </section>
    </>
  );
}

export default App;
