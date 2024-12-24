import { useNavigate } from "react-router-dom";

export default function Borders({ borderingCountry, countries, countryMap }) {
  const navigate = useNavigate();
  const handleBorderCrossing = (countryName) => {
    navigate(`/${countryName}`);
  };
  return (
    <>
      <div className="sr-only">Button to navigate to: {borderingCountry}</div>
      <button onClick={() => handleBorderCrossing(borderingCountry)}>
        {borderingCountry}
      </button>
    </>
  );
}
