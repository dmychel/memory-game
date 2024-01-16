import "../../styles/start.css";
import Button from "./primitives/Button";
import PropTypes from "prop-types";

const Start = ({ startGame }) => {
  const initiateGame = (value) => {
    const htmlEL = document.getElementById("startMas");
    return startGame(value), (htmlEL.style.display = "none");
  };

  return (
    <>
      <section className="start-master" id="startMas">
        <div className="title">
          <h2>Select a Diffculty</h2>
        </div>
        <div className="btn-container">
          <Button title={"Easy"} clickEvent={() => initiateGame(1)} />
          <Button title={"Hard"} clickEvent={() => initiateGame(2)} />
        </div>
      </section>
    </>
  );
};

export default Start;

Start.propTypes = {
  setTiles: PropTypes.func,
  gameStart: PropTypes.bool,
  setGameStart: PropTypes.func,
  setDifficulty: PropTypes.func,
  startGame: PropTypes.func,
};
