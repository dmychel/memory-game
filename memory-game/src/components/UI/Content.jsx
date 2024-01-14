import Start from "./Start";
import Score from "./Score";
import Cards from "./Cards";
import GameOver from "../../../../memory-game/src/components/UI/primitives/GameOver";
import PropTypes from "prop-types";
import "../../styles/content.css";

const Content = ({
  points = { points },
  best = { best },
  setBest = { setBest },
  tiles = { tiles },
  setTiles = { setTiles },
  selection = { selection },
  setSelection = { setSelection },
  handleFlip = { handleFlip },
  gameStart = { gameStart },
  setGameStart = { setGameStart },
  isGameOver = { isGameOver },
  difficulty = { difficulty },
  setDifficulty = { setDifficulty },
}) => {
  return (
    <section className="content">
      <Start
        setTiles={setTiles}
        gameStart={gameStart}
        setGameStart={setGameStart}
        setDifficulty={setDifficulty}
      />
      {gameStart && (
        <>
          {isGameOver ? (
            <>
              <Score points={points} best={best} setBest={setBest} />
              <GameOver />
            </>
          ) : (
            <>
              <Score points={points} best={best} setBest={setBest} />
              <Cards
                tiles={tiles}
                selection={selection}
                setSelection={setSelection}
                handleFlip={handleFlip}
                difficulty={difficulty}
              />
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Content;

Content.propTypes = {
  points: PropTypes.number,
  best: PropTypes.number,
  setBest: PropTypes.func,
  tiles: PropTypes.array,
  setTiles: PropTypes.func,
  selection: PropTypes.array,
  setSelection: PropTypes.func,
  handleFlip: PropTypes.func,
  gameStart: PropTypes.bool,
  setGameStart: PropTypes.func,
  isGameOver: PropTypes.bool,
  difficulty: PropTypes.number,
  setDifficulty: PropTypes.func,
};
