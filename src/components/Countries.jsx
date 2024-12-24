import "./../App.css";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";

export default function Countries({
  countries,
  filterText,
  selectedRegion,
  sortBy,
}) {
  const handleSorting = (countries, sortBy) => {
    if (sortBy === "") return [...countries];
    return [...countries].sort((a, b) => {
      if (sortBy === "areaAsc") {
        return a.area - b.area;
      } else if (sortBy === "areaDesc") {
        return b.area - a.area;
      } else if (sortBy === "popAsc") {
        return a.population - b.population;
      } else if (sortBy === "popDesc") {
        return b.population - a.population;
      }
      return 0;
    });
  };

  const filteredCountries = countries
    .filter(
      (c) =>
        filterText === "" ||
        c.name.common.toLowerCase().includes(filterText.toLowerCase()) ||
        c.region.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((c) => selectedRegion === "" || c.region === selectedRegion);
  const filteredAndSortedCountries = handleSorting(filteredCountries, sortBy);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 grid gap-4 p-4 mb-4 grid-cols-1 md:grid-cols-4">
      {filteredAndSortedCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  selectedRegion: PropTypes.string,
  sortBy: PropTypes.string,
};
