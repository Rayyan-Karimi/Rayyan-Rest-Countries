import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${country.name.common}`); // Navigating to the details page for the clicked country
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 overflow-hidden"
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-2">{country.name.common}</h3>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
    </button>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    flags: PropTypes.any,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string,
  }).isRequired,
};
