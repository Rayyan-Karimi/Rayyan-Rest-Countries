import "./App.css";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";

export default function Countries({ countries, filterText, selectedRegion }) {
  return (
    <div
      className="grid gap-4 p-4 grid-cols-1 md:grid-cols-4"
    >
      {countries
        .filter(
          (c) =>
            filterText === "" ||
            c.name.toLowerCase().includes(filterText.toLowerCase()) ||
            c.region.toLowerCase().includes(filterText.toLowerCase())
        )
        .filter((c) => selectedRegion === "" || c.region === selectedRegion)
        .map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  selectedRegion: PropTypes.string,
};
