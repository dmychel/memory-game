import "../../styles/card.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ tiles, selection, setSelection, handleFlip, difficulty }) => {
  const renderType = () => {
    if (difficulty === 1) {
      return "card-master";
    }
    return "card-master-hard";
  };

  return (
    <>
      <section className={renderType()}>
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
  difficulty: PropTypes.number,
};
