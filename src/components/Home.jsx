import ManipulateData from "./ManipulateData";
import Countries from "./Countries";
import PropTypes from "prop-types";

export default function Home({
  filterText,
  sortBy,
  setSortBy,
  setFilterText,
  countries,
  setSelectedRegion,
  selectedRegion,
}) {
  return (
    <div>
      <ManipulateData
        filterText={filterText}
        setFilterText={setFilterText}
        countries={countries}
        key={countries.forEach((country) => country.name)}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Countries
        countries={countries}
        filterText={filterText}
        selectedRegion={selectedRegion}
        sortBy={sortBy}
      />
    </div>
  );
}

Home.propTypes = {
  filterText: PropTypes.string,
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
  setFilterText: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedRegion: PropTypes.func,
  selectedRegion: PropTypes.string,
};
