import "./../../App.css";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

export default function ManipulateData({
  filterText,
  setFilterText,
  countries,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
  selectedSubRegion,
  setSelectedSubRegion,
  selectedLanguage,
  setSelectedLanguage,
}) {
  const regions = Array.from(new Set(countries.map((cont) => cont.region)));
  const regionsToSubRegions = countries.reduce((acc, { region, subregion }) => {
    if (!acc[region]) acc[region] = new Set();
    acc[region].add(subregion);
    return acc;
  }, {});
  Object.keys(regionsToSubRegions).forEach((region) => {
    regionsToSubRegions[region] = Array.from(regionsToSubRegions[region]);
  });

  const languages = Array.from(
    new Set(
      countries.flatMap((cont) =>
        cont.languages ? Object.values(cont.languages) : []
      )
    )
  );

  const sortByOptions = [
    { value: "areaAsc", label: "Area Asc." },
    { value: "areaDesc", label: "Area Desc." },
    { value: "popAsc", label: "Population Asc." },
    { value: "popDesc", label: "Population Desc." },
  ];

  return (
    <div className="flex flex-wrap gap-4 py-4 justify-evenly items-center md:pr-8">
      {/* Search Input */}
      <div className="flex flex-col">
        <label>Search</label>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search for a country.."
          className="bg-white dark:bg-slate-800 rounded-lg text-md pl-10 pr-3 py-2 w-[80%] md:w-min"
        />
      </div>

      {/* Language Filter */}
      <Dropdown
        label="Language"
        options={languages.map((lang) => ({ value: lang, label: lang }))}
        selectedValue={selectedLanguage}
        onChange={(value) => {
          setSelectedLanguage(value);
        }}
      />

      {/* Sort Options */}
      <Dropdown
        label="Sort"
        options={sortByOptions}
        selectedValue={sortBy}
        onChange={setSortBy}
      />

      {/* Region Filter */}
      <Dropdown
        label="Region"
        options={regions.map((region) => ({ value: region, label: region }))}
        selectedValue={selectedRegion}
        onChange={(value) => {
          setSelectedRegion(value);
          setSelectedSubRegion("");
        }}
      />

      {/* Subregion Filter */}
      {selectedRegion && (
        <Dropdown
          label="Subregion"
          options={regionsToSubRegions[selectedRegion].map((subregion) => ({
            value: subregion,
            label: subregion,
          }))}
          selectedValue={selectedSubRegion}
          onChange={setSelectedSubRegion}
        />
      )}
    </div>
  );
}

ManipulateData.propTypes = {
  filterText: PropTypes.string,
  setFilterText: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSelectedSubRegion: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string,
  setSelectedLanguage: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  selectedSubRegion: PropTypes.string,
};
