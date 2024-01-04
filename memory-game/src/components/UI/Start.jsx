import "../../styles/start.css";
import Button from "./primitives/Button";
import { fetchEntry } from "../service/api/fetchEntry";
import PropTypes from "prop-types";

const Start = ({ setTiles }) => {
  const startGame = async (difficulty) => {
    let arr = await callAPI(difficulty);
    let newArr = shuffle(arr);
    setTiles(newArr);
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
      arr.push(promise, promise, promise);
    }
    return arr;
  } else {
    let num = Math.floor(Math.random() * 380);
    for (let i = 0; i < 8; i++) {
      const promise = await fetchEntry(num);
      arr.push(promise, promise);
    }
    return arr;
  }
};

const shuffle = (arr) => {
  let newArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return newArr;
};

Start.propTypes = {
  setTiles: PropTypes.func,
};