import React from "react";

const WeatherApp = ({ weather }) => {
  const { temperature, conditions } = weather;
  const isAboveThreshold = temperature > 20;

  return (
    <div>
      <h1>Weather App</h1>
      <p>
         Temperature:{" "}
         <span style={{ color: isAboveThreshold ? "red" : "blue" }}>
             {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherApp;