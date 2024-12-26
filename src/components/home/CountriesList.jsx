import PropTypes from "prop-types";
import CountryCard from "./CountryCard"; // Assuming you'll create a CountryCard component

export default function CountriesList({ countries }) {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6">
    <div className="flex flex-wrap justify-center gap-8 my-6">
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
};
