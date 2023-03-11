import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';


const getWeatherData = (latitude, longitude) => {
  const url = baseUrl + `?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
  const response = axios.get(url);
  
  return response;
};

const weatherService = { getWeatherData };

export default weatherService;
