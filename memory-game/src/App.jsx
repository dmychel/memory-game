// STYLESHEET
import "./App.css";

// FONTS
import "./assets/fonts/SherwoodRegular.ttf";

// COMPONENTS
import Content from "./components/UI/Content";
import Header from "./components/UI/Header";

// FUNCTIONS
import { useState, useEffect } from "react";
import { fetchEntry } from "./components/service/api/fetchEntry";
import { useLocalStorage } from "./components/useLocalStorage";

// round function that does the same as start game

function App() {
  // LOCAL STORAGE
  const { setData, getData } = useLocalStorage("value");

  const [tiles, setTiles] = useState([]);
  const [selection, setSelection] = useState([]);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(getData());
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

  // check round status
  useEffect(() => {
    if (difficulty === 1) {
      if (points % 3 === 0) {
        setHighScore();
        startGame(1);
      } else {
        setHighScore();
      }
    } else if (difficulty === 2) {
      if (points % 8 === 0) {
        setHighScore();
        startGame(2);
      } else {
        setHighScore();
      }
    }
  }, [points]);

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

  const setHighScore = () => {
    return points > best ? setBest(points) : null, setData(best);
  };

  const endGame = (value) => {
    if (value === "win") {
      return addPoint(), setHighScore();
    } else {
      return setIsGameOver(!isGameOver), setHighScore();
    }
  };

  const startGame = async (difficulty) => {
    const arrPhase1 = await callAPI(difficulty);
    const arrPhase2 = addUniqueID(arrPhase1);
    const arrPhase3 = shuffle(arrPhase2);

    setGameStart(true);
    setDifficulty(difficulty);
    setTiles(arrPhase3);

    setTimeout(() => {
      const phaseFinal = [...arrPhase3];
      phaseFinal.map((obj) => {
        return (obj.flipped = false);
      });
      setTiles(phaseFinal);
    }, "3000");
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
          startGame={startGame}
        />
      </section>
    </>
  );
}

const callAPI = async (difficulty) => {
  let arr = [];
  let num = Math.floor(Math.random() * 380);

  if (difficulty === 1) {
    for (let i = 0; i < 3; i++) {
      const promise = await fetchEntry(num);

      const res1 = { ...promise };
      const res2 = { ...promise };
      const res3 = { ...promise };

      arr.push(res1, res2, res3);
    }
    return arr;
  } else {
    let num = Math.floor(Math.random() * 380);
    for (let i = 0; i < 8; i++) {
      const promise = await fetchEntry(num);

      const res1 = { ...promise };
      const res2 = { ...promise };

      arr.push(res1, res2);
    }
    return arr;
  }
};

const addUniqueID = (arr) => {
  let newArr = arr;
  newArr.map((value) => {
    return (value.uniqueID = crypto.randomUUID());
  });
  return newArr;
};

// shuffle card order
const shuffle = (arr) => {
  let newArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return newArr;
};
export default App;
