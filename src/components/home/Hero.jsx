import ThemeComponent from "../util/ThemeComponent.jsx";

export default function Hero() {
    return (
      <div className="min-w-screen flex justify-between shadow-lg py-6 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h2 className="font-bold ml-8">Where in the world?</h2>
        <ThemeComponent />
      </div>
    );
  }