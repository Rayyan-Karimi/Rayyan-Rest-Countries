import "./App.css";
import { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import Countries from "./Countries";
import ThemeComponent from "./ThemeComponent";

function Hero() {
  return (
    <div className="flex justify-between shadow-lg py-6 px-4">
      <h2 className="font-bold">Where in the world?</h2>
      <ThemeComponent />
    </div>
  );
}

function App() {
  // const countries = [
  //   {
  //     name: "Germany",
  //     region: "Europe",
  //     population: 83000000,
  //     capital: "Berlin",
  //   },
  //   {
  //     name: "USA",
  //     region: "Americas",
  //     population: 192120000,
  //     capital: "Washington DC",
  //   },
  //   {
  //     name: "Brazil",
  //     region: "Americas",
  //     population: 93000000,
  //     capital: "Brasilia",
  //   },
  //   {
  //     name: "Iceland",
  //     region: "Europe",
  //     population: 13000000,
  //     capital: "Rejkjavik",
  //   },
  //   { name: "Afghan", region: "Asia", population: 23000000, capital: "Kabul" },
  //   {
  //     name: "Algeria",
  //     region: "Africa",
  //     population: 43000000,
  //     capital: "Algiers",
  //   },
  //   {
  //     name: "New Zealand",
  //     region: "Oceania",
  //     population: 33000000,
  //     capital: "Wellington",
  //   },
  //   {
  //     name: "Sudan",
  //     region: "Africa",
  //     population: 21000000,
  //     capital: "Khartoum",
  //   },
  //   {
  //     name: "Sri Lanka",
  //     region: "Asia",
  //     population: 3000000,
  //     capital: "Sri Jayawardenepurem Kotte",
  //   },
  // ];
  const [filterText, setFilterText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        const transformedData = data.map((country) => ({
          name: country.name.common,
          region: country.region,
          population: country.population,
          capital: country.capital,
        }));
        setCountries(transformedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <Hero />
      <div className="px-4 bg-slate-200 min-h-screen">
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

export default App;
