import "../styles/card.css";
import PropTypes from "prop-types";

const Cards = ({ tiles }) => {
  return (
    <>
      <section className="card-master">
        {tiles.map((url) => (
          <div className="card-container" key={crypto.randomUUID()}>
            {console.log(tiles)}
            <img src={url} alt="try again" className="card" />
          </div>
        ))}
      </section>
    </>
  );
};
export default Cards;

Cards.propTypes = {
  tiles: PropTypes.array,
};
