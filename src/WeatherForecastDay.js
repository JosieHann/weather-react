import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    function checkScreenWidth() {
      let screenWidth = window.innerWidth;
      if (screenWidth <= 500) {
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      }
    }
    checkScreenWidth();
  
    return days[day];
  }
  
  return (
    <div className="whole-col">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}/
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
      <div className="WeatherForcast-Day">
        <img className="WeatherForecast-img"src={props.data.condition.icon_url} alt={props.data.description} />
      </div>
    </div>
  );
}