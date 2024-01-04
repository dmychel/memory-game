import PropTypes from "prop-types";

const Card = ({ data, url, selection, setSelection }) => {
  return (
    <>
      <div className="card-container">
        <img
          src={url}
          alt="try again"
          className="card"
          onClick={() => setSelection([...selection, data.id])}
        />
      </div>
    </>
  );
};
export default Card;

Card.propTypes = {
  url: PropTypes.string,
  selection: PropTypes.array,
  setSelection: PropTypes.func,
  data: PropTypes.object,
};
