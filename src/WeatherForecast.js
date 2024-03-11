import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>{" "}
          <div className="WeatherForecastIcon" size="32">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
          </div>
          <span className="WeatherForecastHigh">19°C</span>
          <span className="WeatherForecastLow">10°C</span>
        </div>
      </div>
    </div>
  );
}
