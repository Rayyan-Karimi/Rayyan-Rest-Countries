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
  selectedSubRegion,
  setSelectedSubRegion,
}) {
  return (
    <div className="px-4 bg-slate-100 py-2 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <ManipulateData
        filterText={filterText}
        setFilterText={setFilterText}
        countries={countries}
        key={countries.forEach((country) => country.name)}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedSubRegion={selectedSubRegion}
        setSelectedSubRegion={setSelectedSubRegion}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Countries
        countries={countries}
        filterText={filterText}
        selectedRegion={selectedRegion}
        selectedSubRegion={selectedSubRegion}
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
  selectedSubRegion: PropTypes.string,
  setSelectedSubRegion: PropTypes.func,
};
