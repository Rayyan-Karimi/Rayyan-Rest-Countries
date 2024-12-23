import "./App.css";
import { useEffect, useState } from "react";
import ManipulateData from "./ManipulateData";
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
  const countries = [
    {
      name: "Germany",
      region: "Europe",
      population: 83000000,
      capital: "Berlin",
      area: 10,
    },
    {
      name: "USA",
      region: "Americas",
      population: 192120000,
      capital: "Washington DC",
      area: 100,
    },
    {
      name: "Brazil",
      region: "Americas",
      population: 93000000,
      capital: "Brasilia",
      area: 1000,
    },
    {
      name: "Iceland",
      region: "Europe",
      population: 13000000,
      capital: "Rejkjavik",
      area: 20,
    },
    {
      name: "Afghan",
      region: "Asia",
      population: 23000000,
      capital: "Kabul",
      area: 101,
    },
    {
      name: "Algeria",
      region: "Africa",
      population: 43000000,
      capital: "Algiers",
      area: 90,
    },
    {
      name: "New Zealand",
      region: "Oceania",
      population: 33000000,
      capital: "Wellington",
      area: 896,
    },
    {
      name: "Sudan",
      region: "Africa",
      population: 21000000,
      capital: "Khartoum",
      area: 575,
    },
    {
      name: "Sri Lanka",
      region: "Asia",
      population: 3000000,
      capital: "Sri Jayawardenepurem Kotte",
      area: 1500,
    },
  ];
  const [filterText, setFilterText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  // const [countries, setCountries] = useState([]);
  const [sortBy, setSortBy] = useState("");

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        const transformedData = data.map((country) => ({
          flag: country.flags.png,
          name: country.name.common,
          region: country.region,
          population: country.population,
          capital: country.capital,
          area: country.area,
        }));
        setCountries(transformedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  });*/
  return (
    <div>
      <Hero />
      <div className="px-4 bg-slate-200 min-h-screen">
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
          key={countries.name}
          countries={countries}
          filterText={filterText}
          selectedRegion={selectedRegion}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}

export default App;
