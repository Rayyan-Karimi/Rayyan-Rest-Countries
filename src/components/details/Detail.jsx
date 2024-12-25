import "./../../App.css";
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
      <div className="bg-slate-200 p-8 pb-0 dark:bg-slate-700 flex justify-start w-full min-w-screen">
        <button
          className="mx-[10%] px-6 border border-black bg-white dark:bg-inherit shadow-lg dark:border-white dark:text-white"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <div className="bg-slate-200 dark:bg-slate-700 dark:text-white justify-center items-center flex flex-col md:flex-row md:justify-center gap-20 min-h-[100vh] md:min-h-[33rem] px-[8%]">
        <div className="flex justify-center items-center h-auto w-[80%]">
          <img
            className="shadow-lg dark:shadow-slate-500"
            src={country.flags.png}
            alt={`${country.name.common}'s flag`}
          />
        </div>
        <div className="text-left p-4 w-full">
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <div className="flex gap-10 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">
                <span className="font-bold">Native Name: </span>{" "}
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official
                }
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
                {Array.isArray(country.capital)
                  ? country.capital.join(", ")
                  : country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">
                <span className="font-bold">Top Level Domain: </span>{" "}
                {Array.isArray(country.tld)
                  ? country.tld.join(", ")
                  : country.tld}
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
            </div>
          </div>
          <div className="p-4 pl-0 font-bold">
            <p>Border Countries:</p>
            {borderNames.length ? (
              borderNames.map((borderingCountry) => (
                <Borders
                  key={borderingCountry}
                  borderingCountry={borderingCountry}
                />
              ))
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
