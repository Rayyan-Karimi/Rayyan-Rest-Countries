import "./../App.css";
import PropTypes from "prop-types";
import Borders from "./Borders";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail({ countries }) {
  const navigate = useNavigate();
  const { name } = useParams();

  const country = countries.find((c) => c.name.common === name);
  if (!country) return <p>No such country found.</p>;

  console.log("Ccountry:", country);
  const countryMap = new Map(
    countries.map((country) => [country.cca3, country.name.common])
  );
  console.log("Country MAP:", countryMap);
  console.log("Borders available:", country.borders);
  const borderNames = (country.borders || []).map((code) =>
    countryMap.get(code)
  );
  console.log("Border:", borderNames);

  return (
    <div>
      <div className="bg-slate-200 dark:bg-slate-700 flex justify-start w-full min-w-screen h-28">
        <button
          className="mx-[10%] my-10 px-6 border border-black bg-white dark:bg-inherit shadow-lg dark:border-white dark:text-white"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <div className="pb-24 bg-slate-200 dark:bg-slate-700 dark:text-white justify-center items-center flex flex-col md:flex-row md:justify-center gap-20 min-h-[30rem] px-[8%]">
        <img
          className="md:h-[15vw] md:w-[30vw] shadow-2xl"
          src={country.flags.png}
          alt={`${country.name.common}'s flag`}
        />
        <div className="text-left p-4">
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <div className="flex gap-10 py-4">
            <div>
              <p className="text-sm">
                <span className="font-bold">Native Name: </span>{" "}
                {country.name.official}
              </p>
              <p className="text-sm">
                <span className="font-bold">Population: </span>{" "}
                {country.population}
              </p>
              <p className="text-sm">
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p className="text-sm">
                <span className="font-bold">Sub-Region: </span>
                {country.subregion || "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-bold">Top Level Domain: </span>{" "}
                {country.tld}
              </p>
              <p className="text-sm">
                <span className="font-bold">Currency: </span>{" "}
                {Object.keys(country.currencies || {}).length
                  ? country.currencies[Object.keys(country.currencies)[0]].name
                  : "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Languages: </span>
                {Object.values(country.languages || {})
                  .sort()
                  .join(", ") || "Not available."}
              </p>
              {borderNames.map((borderingCountry) => (
                <Borders
                  key={borderingCountry}
                  borderingCountry={borderingCountry}
                  countries={countries}
                  countryMap={countryMap}
                />
              ))}
            </div>
          </div>
          <div className="p-4 pl-0 font-bold">Border Countries: </div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
