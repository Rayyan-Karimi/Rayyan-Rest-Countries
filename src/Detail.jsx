import "./App.css";
import PropTypes from "prop-types";

export default function Detail({ country }) {
  return (
    <div>
      <div className="flex justify-start w-full min-w-screen h-28 bg-indigo-300">
        <button className="mx-20 my-10 px-4 border border-black">Back</button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-20 min-h-96 p-4">
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <div className="border text-left p-4">
          <h2 className="text-lg font-bold">{country.name}</h2>
          <div className="flex gap-10 py-4">
            <div>
              <p className="text-sm">
                <span className="font-bold">Native Name:</span>{" "}
                {country.native_name}
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
                <span className="font-bold">Sub-Region:</span>
                {country.subregion}
              </p>
              <p className="text-sm">
                <span className="font-bold">Capital:</span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.domain}
              </p>
              <p className="text-sm">
                <span className="font-bold">Currency:</span> {country.currency}
              </p>
              <p className="text-sm">
                <span className="font-bold">Languages:</span>
                {country.languages}
              </p>
            </div>
          </div>
          <div className="p-4 pl-0 font-bold">Border Countries:</div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  country: PropTypes.string.isRequired,
};
