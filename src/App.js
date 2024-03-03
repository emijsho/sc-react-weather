import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <footer>
        <smaller>
          <a href="https://github.com/emijsho/sc-react-weather">
            Open Source Code
          </a>{" "}
          by Emily Short. Hosted on{" "}
          <a href="https://react-weather-ejs.netlify.app/">Netlify.</a>
        </smaller>
      </footer>
    </div>
  );
}
