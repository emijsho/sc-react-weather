import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "494f3181eb1oe9bfae0t4f2214913d5b";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&untis=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
