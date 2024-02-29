import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  function displayWeather(response) {
    setTemperature(`${Math.round(response.data.main.temp)}`);
    setDescription(`${response.data.weather[0].description}`);
    setHumidity(`${response.data.main.humidity}`);
    setWind(`${Math.round(response.data.wind.speed)}`);
    setWeatherIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=281450ec88936f4fa8ee9864682b49a0&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{city}</p>
      <ul>
        <li>Temperature: {temperature}°C </li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}% </li>
        <li>Wind: {wind}MPH </li>
        <li>
          <img src={weatherIcon} />
        </li>
      </ul>
    </div>
  );
}
