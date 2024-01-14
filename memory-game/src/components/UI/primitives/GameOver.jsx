import "../../../styles/gameOver.css";

const GameOver = () => {
  return (
    <>
      <h1>Game Over</h1>
      <button className="game-over-btn" onClick={() => location.reload()}>
        Try Again
      </button>
    </>
  );
};

export default GameOver;
