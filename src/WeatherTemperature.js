import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === 'fahrenheit') {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit"><a href="/" onClick={convertToCelsius}>°F</a> | °C</span>
      </div>
    );
  } else {
    const celsiusTemperature = Math.round((props.celsius - 32) * (5 / 9));
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{celsiusTemperature}</span>
        <span className="unit"><a href="/" onClick={convertToFahrenheit}>°C</a> | °F</span>
      </div>
    );
  }
}