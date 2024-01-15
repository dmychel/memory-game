import "../../styles/card.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ tiles, selection, setSelection, handleFlip, difficulty }) => {
  const renderType = () => {
    if (difficulty === 1) {
      return "card-parent";
    }
    return "card-parent-hard";
  };

  return (
    <section className="card-master">
      <div className={renderType()}>
        {tiles.map((data, index) => (
          <Card
            key={index}
            index={index}
            url={data.image}
            selection={selection}
            setSelection={setSelection}
            data={data}
            handleFlip={handleFlip}
            difficulty={difficulty}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;

Cards.propTypes = {
  tiles: PropTypes.array,
  selection: PropTypes.array,
  setSelection: PropTypes.func,
  handleFlip: PropTypes.func,
  difficulty: PropTypes.number,
};
