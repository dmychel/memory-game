import "../styles/card.css";
import PropTypes from "prop-types";

const Cards = ({ entry }) => {
  return (
    <>
      {entry.map((url) => (
        <div className="card-container" key={crypto.randomUUID()}>
          {console.log(entry)}
          <img src={url} alt="try again" />
        </div>
      ))}
    </>
  );
};
export default Cards;

Cards.propTypes = {
  entry: PropTypes.array,
};
