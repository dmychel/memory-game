import "../../styles/card.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ tiles, selection, setSelection }) => {
  const handleFlip = (index) => {
    const clonedArr = tiles.map((x) => x);
    const data = clonedArr[index];
    data.flipped = true;
    console.log(clonedArr[index]);
  };

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
};
