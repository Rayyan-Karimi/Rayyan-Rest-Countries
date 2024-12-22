import "./App.css";

function ThemeComponent() {
  return (
    <div>
      <i>Under progress</i>
    </div>
  );
}
function Hero() {
  return (
    <div>
      <h2>Where in the world?</h2>
      <ThemeComponent />
    </div>
  );
}
function SearchAndFilter() {
  return (
    <div>
      <input type="text" placeholder="Search for a country.." />
      <select>
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
function Countries() {
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
  return (
    <div className="w-full grid gap-4 aspect-[3/4]">
      {countries.map((country) => (
        <CountryCard key={country} country={country} />
      ))}
    </div>
  );
}
function CountryCard() {
  const country = {
    name: "Sri Lanka",
    region: "Asia",
    population: 3000000,
    capital: "Sri Jayawardenepurem Kotte",
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h2 className="text-lg font-bold">{country.name}</h2>
      <p className="text-sm text-gray-600">
        Region: {country.region} | Population: {country.population} | Capital:
        {country.capital}
      </p>
      <p className="text-sm text-gray-600">
        Region: {country.region} | Population: {country.population} | Capital:
        {country.capital}
      </p>
      <p className="text-sm text-gray-600">
        Region: {country.region} | Population: {country.population} | Capital:
        {country.capital}
      </p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Hero />
      <div>
        <SearchAndFilter />
        <Countries />
      </div>
    </div>
  );
}

export default App;
