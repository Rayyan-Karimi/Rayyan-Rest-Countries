import PropTypes from "prop-types";

export default function Dropdown({ label, options, selectedValue, onChange }) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="font-medium">{label}</label>}
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white hover:cursor-pointer dark:bg-slate-800 w-min px-3 py-2 rounded-lg"
      >
        <option value="">{`Select ${label || "Option"}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
