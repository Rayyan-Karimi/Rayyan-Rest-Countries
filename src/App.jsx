import "./App.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Countries({ countries, filterText, selectedRegion }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
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
function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h2 className="text-lg font-bold">{country.name}</h2>
      <p className="text-sm">
        <span className="font-bold">Population:</span> {country.population}
      </p>
      <p className="text-sm">
        <span className="font-bold">Region:</span> {country.region}
      </p>
      <p className="text-sm">
        <span className="font-bold">Capital:</span>
        {country.capital}
      </p>
    </div>
  );
}
function App() {
  const countries = [
    {
      name: "Germany",
      region: "Europe",
      population: 83000000,
      capital: "Berlin",
    },
    {
      name: "USA",
      region: "Americas",
      population: 192120000,
      capital: "Washington DC",
    },
    {
      name: "Brazil",
      region: "Americas",
      population: 93000000,
      capital: "Brasilia",
    },
    {
      name: "Iceland",
      region: "Europe",
      population: 13000000,
      capital: "Rejkjavik",
    },
    { name: "Afghan", region: "Asia", population: 23000000, capital: "Kabul" },
    {
      name: "Algeria",
      region: "Africa",
      population: 43000000,
      capital: "Algiers",
    },
    {
      name: "New Zealand",
      region: "Oceania",
      population: 33000000,
      capital: "Wellington",
    },
    {
      name: "Sudan",
      region: "Africa",
      population: 21000000,
      capital: "Khartoum",
    },
    {
      name: "Sri Lanka",
      region: "Asia",
      population: 3000000,
      capital: "Sri Jayawardenepurem Kotte",
    },
  ];
  const [filterText, setFilterText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <div>
      <Hero />
      <div className="px-4 bg-slate-200">
        <SearchAndFilter
          filterText={filterText}
          setFilterText={setFilterText}
          countries={countries}
          key={countries.forEach((country) => country.name)}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <Countries
          key={countries.name}
          countries={countries}
          filterText={filterText}
          selectedRegion={selectedRegion}
        />
      </div>
    </div>
  );
}
function SearchAndFilter({
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
function ThemeComponent() {
  return (
    <div className="flex items-center space-x-2">
      {/* Inline SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9866 2.81264C11.1759 3.25273 11.0265 3.76528 10.6304 4.03473C9.04069 5.11602 8 6.93663 8 8.99999C8 12.3137 10.6863 15 14 15C16.9001 15 19.3217 12.9413 19.8791 10.205C19.9749 9.7348 20.3912 9.39893 20.871 9.40466C21.3508 9.4104 21.7589 9.75612 21.8434 10.2285C21.9464 10.8042 22 11.3962 22 12C22 17.5229 17.5229 22 12 22C6.47713 22 2 17.5229 2 12C2 7.21279 5.36283 3.21342 9.85431 2.23097C10.3223 2.1286 10.7972 2.37255 10.9866 2.81264ZM6.51162 6.17934C4.96517 7.6383 4 9.70684 4 12C4 16.4183 7.5817 20 12 20C15.4257 20 18.3485 17.8468 19.4889 14.8199C18.0565 16.1715 16.1254 17 14 17C9.58175 17 6 13.4182 6 8.99999C6 8.00706 6.18101 7.05645 6.51162 6.17934Z"
          fill="#000000"
        />
      </svg>
      <i>Dark Mode</i>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex justify-between shadow-lg py-6 px-4">
      <h2 className="font-bold">Where in the world?</h2>
      <ThemeComponent />
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};
Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  selectedRegion: PropTypes.string,
};
SearchAndFilter.propTypes = {
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
  countries: PropTypes.array.isRequired,
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
};
export default App;
