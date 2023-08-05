import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="container-temp">
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.Fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
</div>
  );
}
