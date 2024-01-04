import "../../styles/score.css";
import PropTypes from "prop-types";

const Score = ({ points }) => {
  return (
    <>
      <section className="score">
        <div className="stat">
          <h2>Current Score</h2>
          <p>{points}</p>
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

Score.propTypes = {
  points: PropTypes.number,
};
