
import React from "react";
import './../styles/App.css';
import WeatherApp from "./WeatherApp";

const App = () => {
const weatherData = { temperature: 25, conditions: "Sunny" };  

  return (
    <div>
      <WeatherApp weather={weatherData} />
    </div>
  );
}

export default App
