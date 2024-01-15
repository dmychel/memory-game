import "../../../styles/gameOver.css";

const GameOver = () => {
  return (
    <section className="game-over-master">
      <div className="game-over">
        <h1>Game Over</h1>
        <button className="game-over-btn" onClick={() => location.reload()}>
          Try Again
        </button>
      </div>
    </section>
  );
};

export default GameOver;
