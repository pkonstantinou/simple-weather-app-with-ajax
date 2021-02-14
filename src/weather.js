import {
  getWeatherIconUrl,
  getWeatherByName,
  getWeatherByCoordinates,
} from "./api";

let msgId = 0;

const getFullDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tusday",
    "Wednsedey",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const hours = `0${d.getHours()}`.slice(-2);
  const minutes = `0${d.getMinutes()}`.slice(-2);
  const month = months[d.getMonth()];
  const day = days[d.getDay()];
  const date = `0${d.getDate()}`.slice(-2);

  return `${day}, ${month} ${date}, ${hours}:${minutes}`;
};

const getPosition = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const disableSpinner = () => {
  document.querySelector("#spinner").classList.add("d-none");
};

const loadWeatherCard = (data) => {
  const location = document.querySelector(".weather-card__location");
  const date = document.querySelector(".weather-card__date");
  const type = document.querySelector(".weather-card__type");
  const image = document.querySelector(".weather-card__image");
  const temparature = document.querySelector(".weather-card__temperature");
  location.innerText = `${data.name}, ${data.sys.country}`;
  date.innerText = getFullDate();
  type.innerText = data.weather[0].description;
  const iconUrl = getWeatherIconUrl(data.weather[0].icon);
  image.style.backgroundImage = `url(${iconUrl})`;
  temparature.innerHTML = `${Math.round(data.main.temp)}<span>&#8451;</span>`;
};

const initWeatherCard = async () => {
  try {
    const { coords } = await getPosition();
    const data = await getWeatherByCoordinates(
      coords.latitude,
      coords.longitude
    );
    disableSpinner();
    loadWeatherCard(data);
  } catch {
    const data = await getWeatherByName("Athens");
    loadWeatherCard(data);
  }
  disableSpinner();
};

const validWeatherSearchEvent = (event) => {
  return (
    (event.type === "keyup" && event.key === "Enter") || event.type === "click"
  );
};

const validResponse = (data) => {
  return Number.parseInt(data.cod) === 200;
};

const showNotFoundMessage = () => {
  const message = document.querySelector("#message");
  message.style.opacity = 1;
  clearTimeout(msgId);
  msgId = setTimeout(() => (message.style.opacity = 0), 5000);
};

const hideNotFoundMessage = () => {
  const message = document.querySelector("#message");
  const cityNameInput = document.querySelector("#city-name");
  message.style.opacity = 0;
  clearTimeout(msgId);
  cityNameInput.focus();
};

const handleWeatherSearch = async (event) => {
  if (validWeatherSearchEvent(event)) {
    const cityNameInput = document.querySelector("#city-name");
    const data = await getWeatherByName(cityNameInput.value);
    if (validResponse(data)) {
      loadWeatherCard(data);
      cityNameInput.blur();
    } else {
      showNotFoundMessage();
      cityNameInput.focus();
    }
    cityNameInput.value = "";
  }
};

export { initWeatherCard, handleWeatherSearch, hideNotFoundMessage };
