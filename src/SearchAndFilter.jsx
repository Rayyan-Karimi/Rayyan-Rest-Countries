import "./App.css";
import PropTypes from "prop-types";

export default function SearchAndFilter({
  filterText,
  setFilterText,
  countries,
  setSelectedRegion,
}) {
  const regions = Array.from(new Set(countries.map((cont) => cont.region)));
  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 py-4">
      <div className="relative w-full md:w-auto">
        <span className="flex items-center absolute inset-y-0 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0l5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search for a country.."
          className="rounded-lg text-md text-center py-2 w-full md:w-auto md:min-w-80"
        />
      </div>
      <select
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="w-1/2 md:w-auto md:min-w-52 px-3 py-2 rounded-lg bg-white"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

SearchAndFilter.propTypes = {
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
  countries: PropTypes.array.isRequired,
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
};
