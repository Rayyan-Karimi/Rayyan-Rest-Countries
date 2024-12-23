import "./../App.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const goToCountryDetails = () => {
    navigate(`/${country.name}`);
  };

  return (
    <button
      className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-4 w-full"
      onClick={goToCountryDetails}
    >
      <img src={country.flag} alt={`${country.name}'s flag`} />
      <h2 className="text-lg font-bold">{country.name}</h2>
      <p className="text-sm">
        <span className="font-bold">Population:</span> {country.population}
      </p>
      <p className="text-sm">
        <span className="font-bold">Region:</span> {country.region}
      </p>
      <p className="text-sm">
        <span className="font-bold">Capital:</span>
        {country.capital}
      </p>
      <p className="text-sm">
        <span className="font-bold">Area:</span>
        {country.area}
      </p>
    </button>
  );
}
CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};
