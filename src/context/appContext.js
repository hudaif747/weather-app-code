import axios from "axios";
import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { tempdata } from "../assets/tempdata";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [coords, setCoords] = useState({ lat: 40.7484, lon: -73.9967 });
  const [temp, setTemp] = useState("-");
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [condition, setCondition] = useState({
    main: "-",
    desc: "-",
    icon: "-",
    high: "-",
    low: "-",
  });
  const [togglerData, setTogglerData] = useState({
    wind: "-",
    humidity: "-",
    pressure: "-",
    rise: "-",
  });

  const [zipCode, setZipCode] = useState(10001); //ZipCode set to New York, NY for fetching default location
  const [weatherData, setWeatherData] = useState();
  // const [onecallData, setOnecallData] = useState();

  const fetchWeatherRequest = `weather?zip=${zipCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  // const fetchOneCallApi = `onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  //this is for fetching by zipcode
  const fetchWeather = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_WEATHER_API_URL}/${fetchWeatherRequest}`
      );
      if (res.status === 200) {
        setWeatherData(res.data);
      } else {
        alert("Error fetching weather data!");
        console.log(res);
      }
    } catch (err) {
      alert(
        "Error invoking Weather API!\n" +
          err.message +
          ": " +
          err.response.statusText
      );
      console.log(err);
    }
  };

  // this is for fetching forecast by lat and lon
  // const fetchOneCall = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_ONECALL_API_URL}/${fetchOneCallApi}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setWeatherData(res.data);
  //       } else {
  //         alert("Error fetching weather data!");
  //         console.log(res);
  //       }
  //     });
  // };

  useEffect(() => {
    // fetchWeather();
    if (weatherData) {
      setDataStates();
    }
  }, [weatherData]);

  useEffect(() => {
    fetchWeather();
  }, [zipCode]);

  function setDataStates() {
    setTemp(Math.round(weatherData.main.temp)); // rounding off decimal
    setCity(weatherData.name);
    setCountry(weatherData.sys.country);
    setCondition((prev) => ({
      ...prev,
      main: weatherData.weather[0].main,
      desc: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      high: weatherData.main.temp_max,
      low: weatherData.main.temp_min,
    }));
    setTogglerData((prev) => ({
      ...prev,
      wind: weatherData.wind.speed + " m/sec",
      humidity: weatherData.main.humidity + "%",
      pressure: weatherData.main.pressure + "hPa",
      rise: convertRiseTimestamp(
        weatherData.sys.sunrise,
        weatherData.sys.sunset
      ),
    }));
    setCoords((prev) => ({
      ...prev,
      lat: weatherData.coord.lat,
      lon: weatherData.coord.lon,
    }));
  }

  return (
    <appContext.Provider
      value={{ temp, city, country, condition, togglerData, setZipCode }}
    >
      {children}
    </appContext.Provider>
  );
};

const convertRiseTimestamp = (sunrise, sunset) => {
  // const time1 = new Date(sunrise).toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   timeZone: "PST",
  //   hour12: true,
  // });
  // const time2 = new Date(sunset).toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   timeZone: "PST",
  //   hour12: true,
  // });
  const time1 = timestampConverter(sunrise);
  const time2 = timestampConverter(sunset);
  let timeString = time1 + " | " + time2;
  return timeString;
};

const timestampConverter = (timestamp) => {
  let timezone = -4; //timezone for USA is GMT -4
  let time = moment
    .utc(timestamp, "X")
    .add(timezone, "hours")
    .format("HH:mm a");
  return time;
};

export default appContext;
