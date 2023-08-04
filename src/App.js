import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pasadena" />

        <footer>
          This project was coded by Josie Hann
          <a
            href="https://github.com/JosieHann/weather-react/blob/master/src/Weather.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://react-weather-app-site.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}