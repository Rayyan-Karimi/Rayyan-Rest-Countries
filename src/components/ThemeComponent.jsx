import "./../App.css";
import { useEffect, useState } from "react";

export default function ThemeComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex hover:cursor-pointer items-center space-x-2 mr-6" onClick={toggleDarkMode}>
      {/* Inline SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill='none'
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9866 2.81264C11.1759 3.25273 11.0265 3.76528 10.6304 4.03473C9.04069 5.11602 8 6.93663 8 8.99999C8 12.3137 10.6863 15 14 15C16.9001 15 19.3217 12.9413 19.8791 10.205C19.9749 9.7348 20.3912 9.39893 20.871 9.40466C21.3508 9.4104 21.7589 9.75612 21.8434 10.2285C21.9464 10.8042 22 11.3962 22 12C22 17.5229 17.5229 22 12 22C6.47713 22 2 17.5229 2 12C2 7.21279 5.36283 3.21342 9.85431 2.23097C10.3223 2.1286 10.7972 2.37255 10.9866 2.81264ZM6.51162 6.17934C4.96517 7.6383 4 9.70684 4 12C4 16.4183 7.5817 20 12 20C15.4257 20 18.3485 17.8468 19.4889 14.8199C18.0565 16.1715 16.1254 17 14 17C9.58175 17 6 13.4182 6 8.99999C6 8.00706 6.18101 7.05645 6.51162 6.17934Z"
          fill={isDarkMode ? "#fff" : "#000"}
        />
      </svg>
      <i>{isDarkMode ? "Light Mode" : "Dark Mode"}</i>
    </div>
  );
}
