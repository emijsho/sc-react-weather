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
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>{" "}
      <div className="WeatherForecastIcon">
        <img
          src={props.data.condition.icon_url}
          size="32"
          alt={props.data.condition.description}
        />{" "}
      </div>
      <span className="WeatherForecastMax">{maxTemperature()}</span>{" "}
      <span className="WeatherForecastMin">{minTemperature()}</span>
    </div>
  );
}
