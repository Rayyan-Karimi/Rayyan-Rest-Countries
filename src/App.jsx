import "./App.css";
import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";

function App() {
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
