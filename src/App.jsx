import "./App.css";
import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import ThemeComponent from "./components/ThemeComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function Hero() {
  return (
    <div className="flex justify-between shadow-lg py-6 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
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
  //     area: 10,
  //     flag: "https://flagcdn.com/w320/de.png",
  //   },
  //   {
  //     name: "USA",
  //     region: "Americas",
  //     population: 192120000,
  //     capital: "Washington DC",
  //     area: 100,
  //     flag: "https://flagcdn.com/w320/us.png",
  //   },
  //   {
  //     name: "Brazil",
  //     region: "Americas",
  //     population: 93000000,
  //     capital: "Brasilia",
  //     area: 1000,
  //   },
  //   {
  //     name: "Iceland",
  //     region: "Europe",
  //     population: 13000000,
  //     capital: "Rejkjavik",
  //     area: 20,
  //   },
  //   {
  //     name: "Afghan",
  //     region: "Asia",
  //     population: 23000000,
  //     capital: "Kabul",
  //     area: 101,
  //   },
  //   {
  //     name: "Algeria",
  //     region: "Africa",
  //     population: 43000000,
  //     capital: "Algiers",
  //     area: 90,
  //   },
  //   {
  //     name: "New Zealand",
  //     region: "Oceania",
  //     population: 33000000,
  //     capital: "Wellington",
  //     area: 896,
  //   },
  //   {
  //     name: "Sudan",
  //     region: "Africa",
  //     population: 21000000,
  //     capital: "Khartoum",
  //     area: 575,
  //   },
  //   {
  //     name: "Sri Lanka",
  //     region: "Asia",
  //     population: 3000000,
  //     capital: "Sri Jayawardenepurem Kotte",
  //     area: 1500,
  //   },
  // ];
  const [filterText, setFilterText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Router>
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filterText={filterText}
              sortBy={sortBy}
              setSortBy={setSortBy}
              setFilterText={setFilterText}
              countries={countries}
              setSelectedRegion={setSelectedRegion}
              selectedRegion={selectedRegion}
              selectedSubRegion={selectedSubRegion}
              setSelectedSubRegion={setSelectedSubRegion}
            />
          }
        />
        <Route path="/:name" element={<Detail countries={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
