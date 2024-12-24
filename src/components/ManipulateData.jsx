import "./../App.css";
import PropTypes from "prop-types";

export default function ManipulateData({
  filterText,
  setFilterText,
  countries,
  selectedRegion,
  setSelectedRegion,
  setSortBy,
  setSelectedSubRegion,
}) {
  // Finding regions from countries
  const regions = Array.from(new Set(countries.map((cont) => cont.region)));
  // Finding regions to sub regions mapping using Set
  const regionsToSubRegions = countries.reduce((acc, { region, subregion }) => {
    if (!acc[region]) acc[region] = new Set();
    acc[region].add(subregion);
    return acc;
  }, {});
  // Converting values from set to array
  Object.keys(regionsToSubRegions).forEach((region) => {
    regionsToSubRegions[region] = Array.from(regionsToSubRegions[region]);
  });
  console.log("regionsToSubRegions:", regionsToSubRegions);
  const sortByOptions = ["areaAsc", "areaDesc", "popAsc", "popDesc"];
  const showSortByOptions = [
    "Area Asc.",
    "Area Desc.",
    "Population Asc.",
    "Population Desc.",
  ];
  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 py-4">
      <div className="relative w-full md:w-1/4">
        <span className="flex items-center absolute inset-y-0 left-2 md:left-6">
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
          className="bg-white dark:bg-slate-800 rounded-lg text-md text-center py-2 w-full md:w-auto"
        />
      </div>
      <select
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-white dark:bg-slate-800 w-1/2 md:w-1/4 px-3 py-2 rounded-lg"
      >
        <option value="">Sort Options</option>
        {sortByOptions.map((sortByOption) => (
          <option key={sortByOption} value={sortByOption}>
            {showSortByOptions[sortByOptions.indexOf(sortByOption)]}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedRegion(e.target.value);
          setSelectedSubRegion("");
        }}
        className="bg-white dark:bg-slate-800 w-1/2 md:w-1/4 px-3 py-2 rounded-lg"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {selectedRegion && (
        <select
          onChange={(e) => setSelectedSubRegion(e.target.value)}
          className="bg-white dark:bg-slate-800 w-1/2 md:w-1/4 px-3 py-2 rounded-lg"
        >
          <option value="">Filter by Sub-Region</option>
          {regionsToSubRegions[selectedRegion].map((subregion) => (
            <option key={subregion} value={subregion}>
              {subregion}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

ManipulateData.propTypes = {
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
  countries: PropTypes.array.isRequired,
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  setSortBy: PropTypes.func,
  setSelectedSubRegion: PropTypes.func,
};
