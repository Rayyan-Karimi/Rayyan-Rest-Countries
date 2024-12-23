import "./App.css";
import PropTypes from "prop-types";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <img src={country.flag} alt={country.name} />
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
    </div>
  );
}
CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};
