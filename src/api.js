import axios from "axios";

const apiUrl = "https://api.openweathermap.org/data/2.5";
const assetsUrl = "https://openweathermap.org";
const api = axios.create({ baseURL: apiUrl });

const getWeatherIconUrl = (code) => {
  const url = `${assetsUrl}/img/wn/${code}@2x.png`;
  return url;
};

const getWeatherByName = async (name) => {
  const url = `weather?q=${name}&units=metric&appid=${process.env.API_KEY}`;
  const { data } = await api.get(url);
  return data;
};

const getWeatherByCoordinates = async (lat, lon) => {
  const url = `weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`;
  const { data } = await api.get(url);
  return data;
};

export { getWeatherIconUrl, getWeatherByName, getWeatherByCoordinates };
