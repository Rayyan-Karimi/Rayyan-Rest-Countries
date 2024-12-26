import "./../../App.css";
import PropTypes from "prop-types";

export default function ManipulateData({
  filterText,
  setFilterText,
  countries,
  selectedRegion,
  setSelectedRegion,
  setSortBy,
  setSelectedSubRegion,
  selectedLanguage,
  setSelectedLanguage,
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
  // Array of all languages
  // myarr.flat
  const languages = Array.from(
    new Set(
      countries.flatMap((cont) => {
        if (cont.languages) {
          return Object.values(cont.languages);
        }
      })
    )
  );
  console.log("Languages:", languages);
  // console.log("regionsToSubRegions:", regionsToSubRegions);
  const sortByOptions = ["areaAsc", "areaDesc", "popAsc", "popDesc"];
  const showSortByOptions = [
    "Area Asc.",
    "Area Desc.",
    "Population Asc.",
    "Population Desc.",
  ];
  return (
    <div className="flex flex-wrap gap-4 py-4 justify-evenly items-center md:pr-8">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search for a country.."
        className="bg-white dark:bg-slate-800 rounded-lg text-md pl-10 pr-3 py-2 w-[80%] md:w-min"
      />
      <select
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-white hover:cursor-pointer dark:bg-slate-800 w-min px-3 py-2 rounded-lg"
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
          setSelectedLanguage(e.target.value);
          setSelectedSubRegion("");
          setSelectedRegion("");
          console.log("selectedLanguage", e.target.value);
        }}
        className="bg-white hover:cursor-pointer dark:bg-slate-800 w-min px-3 py-2 rounded-lg"
      >
        <option value="">Filter by Language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedRegion(e.target.value);
          setSelectedSubRegion("");
        }}
        className="bg-white hover:cursor-pointer dark:bg-slate-800 w-min px-3 py-2 rounded-lg"
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
          className="bg-white hover:cursor-pointer dark:bg-slate-800 w-min px-3 py-2 rounded-lg"
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
  selectedLanguage: PropTypes.string,
  setSelectedLanguage: PropTypes.func,
};
