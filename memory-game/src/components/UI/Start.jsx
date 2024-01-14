import "../../styles/start.css";
import Button from "./primitives/Button";
import { fetchEntry } from "../service/api/fetchEntry";
import PropTypes from "prop-types";

const Start = ({ setTiles, gameStart, setGameStart, setDifficulty }) => {
  const removeDislpay = () => {
    const htmlEL = (document.getElementById("startMas").style.display = "none");
  };
  const startGame = async (difficulty) => {
    const arrPhase1 = await callAPI(difficulty);
    const arrPhase2 = addUniqueID(arrPhase1);
    const arrPhase3 = shuffle(arrPhase2);

    removeDislpay();
    setGameStart(!gameStart);
    setDifficulty(difficulty);
    setTiles(arrPhase3);
    setTimeout(() => {
      const phaseFinal = [...arrPhase3];
      phaseFinal.map((obj) => {
        obj.flipped = false;
      });
      setTiles(phaseFinal);
    }, "3000");
  };

  return (
    <>
      <section className="start-master" id="startMas">
        <div className="btn-container">
          <Button title={"Easy"} clickEvent={() => startGame(1)} />
          <Button title={"Hard"} clickEvent={() => startGame(2)} />
        </div>
      </section>
    </>
  );
};

export default Start;

const callAPI = async (difficulty) => {
  let arr = [];
  let num = Math.floor(Math.random() * 380);

  if (difficulty === 1) {
    for (let i = 0; i < 3; i++) {
      const promise = await fetchEntry(num);
      promise.flipped = true;

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
      promise.flipped = false;
      arr.push(promise, promise);
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

Start.propTypes = {
  setTiles: PropTypes.func,
  gameStart: PropTypes.bool,
  setGameStart: PropTypes.func,
  setDifficulty: PropTypes.func,
};
