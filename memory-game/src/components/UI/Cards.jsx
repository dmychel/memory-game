import "../../styles/card.css";
import PropTypes from "prop-types";
import Card from "./primitives/Card";

const Cards = ({ tiles, selection, setSelection }) => {
  return (
    <>
      <section className="card-master">
        {tiles.map((url) => (
          <Card
            key={crypto.randomUUID()}
            url={url.image}
            selection={selection}
            setSelection={setSelection}
            data={url}
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
