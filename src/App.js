import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Temperature from "./components/Temperature";
const API_KEY = "bdcb0085e5ff638cc0f920d918a5ddf6";

function App(props) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  if (data && Object.keys(data).length === 0 && data.constructor === Object) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("bitch");
        setData({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      });
    }
  }
  useEffect(() => {
    async function getWeatherData() {
      console.log("USE EFFECT IS RUNNING");
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${Math.round(
            data.lat
          )}&lon=${Math.round(data.long)}&appid=${API_KEY}&units=metric`
        );
        console.log(response.data);
        setLocation(response.data || {});
      } catch (err) {
        console.error(err);
      }
    }
    getWeatherData(); // eslint-disable-next-line
  }, [data]);
  return (
    <div>
      <video autoPlay="autoPlay" loop muted = "muted">
        <source src="rain.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <Temperature
          city={location.name || "Karachi"}
          temp={location.main ? location.main.temp : "39"}
          description = {"Rain"}
          // description={location.weather ? location.weather[0].main : "Rainy"}
          high={location.main ? location.main.temp_max : "145"}
          low={location.main ? location.main.temp_min : "39"}
        />
      </div>
    </div>
  );
}

export default App;
