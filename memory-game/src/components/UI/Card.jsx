import PropTypes from "prop-types";

const Card = ({
  index,
  data,
  url,
  handleFlip,
  selection,
  setSelection,
  difficulty,
}) => {
  const handleClick = () => {
    return setSelection([...selection, data.id]), handleFlip(index);
  };

  const regClass = () => {
    if (difficulty === 1) {
      return "card";
    }
    return "hard-card";
  };

  const flippedClass = () => {
    if (difficulty === 1) {
      return "card-flipped";
    }
    return "hard-card-flipped";
  };

  const RegCard = () => {
    return (
      <div className={regClass()} onClick={() => handleClick()}>
        <img src="./assets/img/card-art.png" alt="Card Art" />
      </div>
    );
  };

  const FlippedCard = () => {
    return (
      <div className={flippedClass()} onClick={() => handleClick()}>
        <img src={url} alt="Card" />
        <p>{data.name}</p>
      </div>
    );
  };

  const RegCardHard = () => {
    return (
      <div className={regClass()} onClick={() => handleClick()}>
        <img src="../../src/assets/img/card-art.png" alt="Card Art" />
      </div>
    );
  };

  const FlippedCardHard = () => {
    return (
      <div className={flippedClass()} onClick={() => handleClick()}>
        <img src={url} alt="Card" />
      </div>
    );
  };

  const cardType = () => {
    if (difficulty === 1) {
      return data.flipped ? <FlippedCard /> : <RegCard />;
    }
    return data.flipped ? <FlippedCardHard /> : <RegCardHard />;
  };

  return (
    <>
      <div className="card-container">{cardType()}</div>
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
  difficulty: PropTypes.number,
};
