import "./App.css";
import { useEffect, useState } from "react";
import Detail from "./components/details/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Hero from "./components/home/Hero";

function App() {
  const [filterText, setFilterText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [countries, setCountries] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error loading data. Please try again later.
      </div>
    );
  }

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
              selectedLanguage={selectedLanguage}
              countries={countries}
              setSelectedRegion={setSelectedRegion}
              selectedRegion={selectedRegion}
              selectedSubRegion={selectedSubRegion}
              setSelectedSubRegion={setSelectedSubRegion}
              setSelectedLanguage={setSelectedLanguage}
            />
          }
        />
        <Route path="/:name" element={<Detail countries={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
