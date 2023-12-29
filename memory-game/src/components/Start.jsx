import "../styles/start.css";
import Cards from "./Cards";
import PropTypes from "prop-types";

const Start = ({ callAPI, entry }) => {
  const startGame = (difficulty) => {
    const startEl = document.getElementById("startMas");
    startEl.style.display = "none";
    if (difficulty === 1) {
      console.log(difficulty);
      easy();
    } else {
      console.log(difficulty);
      hard();
    }
  };

  const hard = () => {
    callAPI(2);
  };

  const easy = () => {
    callAPI(1);
  };

  return (
    <>
      <section className="start-master" id="startMas">
        <div className="btn-container">
          <button onClick={() => startGame(1)}>Easy</button>
          <button onClick={() => startGame(2)}>Hard</button>
        </div>
      </section>
      <Cards entry={entry} />
    </>
  );
};

export default Start;

Start.propTypes = {
  callAPI: PropTypes.func,
  entry: PropTypes.array,
};
