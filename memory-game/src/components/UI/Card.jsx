import PropTypes from "prop-types";

const Card = ({ index, data, url, selection, setSelection, handleFlip }) => {
  const handleClick = () => {
    setSelection([...selection, data.id]);
    handleFlip(index);
  };

  const FlippedCard = () => {
    return (
      <div className="card-flipped">
        <img src={url} alt="Card" />
        <p>{data.name}</p>
      </div>
    );
  };

  const RegCard = () => {
    return (
      <div className="card" onClick={() => handleClick()}>
        <img src="../../src/assets/img/card-art.png" alt="Card Art" />
      </div>
    );
  };

  return (
    <>
      <div className="card-container">
        {data.flipped ? <FlippedCard /> : <RegCard />}
      </div>
    </>
  );
};
export default Card;

Card.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  selection: PropTypes.array,
  setSelection: PropTypes.func,
  data: PropTypes.object,
  handleFlip: PropTypes.func,
  id: PropTypes.string,
};
