import Dropdown from "../util/Dropdown.jsx";
import CountriesList from "./CountriesList";
import PropTypes from "prop-types";

export default function Home({
  filterText,
  sortBy,
  setSortBy,
  setFilterText,
  countries,
  setSelectedRegion,
  selectedRegion,
  selectedLanguage,
  selectedSubRegion,
  setSelectedSubRegion,
  setSelectedLanguage,
}) {
  // Filtering Logic
  const filteredCountries = countries
    .filter((country) => 
      country.name.common.toLowerCase().includes(filterText.toLowerCase()) // Search filter
    )
    .filter((country) => 
      selectedRegion ? country.region === selectedRegion : true // Region filter
    )
    .filter((country) => 
      selectedSubRegion ? country.subregion === selectedSubRegion : true // Subregion filter
    )
    .filter((country) => 
      selectedLanguage ? country.languages && Object.values(country.languages).includes(selectedLanguage) : true // Language filter
    );

  // Sorting Logic
  const sortedCountries = filteredCountries.sort((a, b) => {
    switch (sortBy) {
      case "areaAsc":
        return a.area - b.area;
      case "areaDesc":
        return b.area - a.area;
      case "popAsc":
        return a.population - b.population;
      case "popDesc":
        return b.population - a.population;
      default:
        return 0;
    }
  });

  // Regions and languages data
  const regions = Array.from(new Set(countries.map((cont) => cont.region)));
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
    <div className="px-4 bg-slate-100 py-2 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-w-screen min-h-screen">
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
            options={countries
              .filter((country) => country.region === selectedRegion)
              .map((country) => country.subregion)
              .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
              .map((subregion) => ({
                value: subregion,
                label: subregion,
              }))}
            selectedValue={selectedSubRegion}
            onChange={setSelectedSubRegion}
          />
        )}
      </div>

      {/* Countries display */}
      <CountriesList countries={sortedCountries} />
    </div>
  );
}

Home.propTypes = {
  filterText: PropTypes.string,
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
  selectedLanguage: PropTypes.string,
  setSelectedLanguage: PropTypes.func,
  setFilterText: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedRegion: PropTypes.func,
  selectedRegion: PropTypes.string,
  selectedSubRegion: PropTypes.string,
  setSelectedSubRegion: PropTypes.func,
};
