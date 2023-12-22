import "../styles/score.css";

const Score = () => {
  return (
    <>
      <section className="score">
        <div className="stat">
          <h2>Current Score</h2>
          <p>0</p>
        </div>
        <div className="stat">
          <h2>Best Score</h2>
          <p>0</p>
        </div>
      </section>
    </>
  );
};

export default Score;
