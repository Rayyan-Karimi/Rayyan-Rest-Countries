import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Borders({ borderingCountry }) {
  const navigate = useNavigate();
  const handleBorderCrossing = (countryName) => {
    navigate(`/${countryName}`);
  };
  return (
    <>
      <div className="sr-only">Button to navigate to: {borderingCountry}</div>
      <button
        className="border border-black dark:border-white m-2 px-2"
        onClick={() => handleBorderCrossing(borderingCountry)}
      >
        {borderingCountry}
      </button>
    </>
  );
}

Borders.propTypes = {
  borderingCountry: PropTypes.string.isRequired,
};
