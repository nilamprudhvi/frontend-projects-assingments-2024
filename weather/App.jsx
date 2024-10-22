
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const APIkey = "29ddb881b1fd3e864b7e98a1d97b6a53";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = () => {
    if (location === "") {
      setError("Please enter a location");
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setError("Invalid location. Please try again.");
          setWeather(null);
        }
      })
      .catch(() => {
        setError("Unable to fetch weather. Try again later.");
      });

    setLocation(""); // Clear input field
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Weather App</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn btn-primary" onClick={getWeather}>
              Get Weather
            </button>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {weather && (
            <div className="card">
              <div className="card-body">
                <h3>{weather.name}</h3>
                <p>Temperature: {Math.floor(weather.main.temp - 273)}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
                <img
                  src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
