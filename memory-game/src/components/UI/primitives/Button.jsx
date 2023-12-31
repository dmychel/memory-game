import PropTypes from "prop-types";

const Button = ({ title, clickEvent }) => {
  return (
    <>
      <button onClick={() => clickEvent()}>{title}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  clickEvent: PropTypes.func,
};
