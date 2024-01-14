import "../../styles/card.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ tiles, selection, setSelection, handleFlip, checkClicks }) => {
  return (
    <>
      <section className="card-master">
        {tiles.map((data, index) => (
          <Card
            key={index}
            index={index}
            url={data.image}
            selection={selection}
            setSelection={setSelection}
            data={data}
            handleFlip={handleFlip}
          />
        ))}
      </section>
    </>
  );
};

export default Cards;

Cards.propTypes = {
  tiles: PropTypes.array,
  selection: PropTypes.array,
  setSelection: PropTypes.func,
  handleFlip: PropTypes.func,
  checkClicks: PropTypes.func,
};
