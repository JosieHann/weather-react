import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p>
      <FormattedDate date={props.data.date} />
      </p>
      <div>
        <img src={props.data.icon} alt="Clear" id="icon" />
      </div>
      <div>
        <WeatherTemperature fahrenheit={props.data.temperature} />
      </div>
      <div>
      <h1>{props.data.city}</h1>
    </div><div className="ul-container">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
        <ul>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      </div>
); 
}