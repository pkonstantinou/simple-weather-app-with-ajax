// imports
import {
  initWeatherCard,
  handleWeatherSearch,
  hideNotFoundMessage,
} from "./weather";

// initialize
initWeatherCard();

// listeners
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", handleWeatherSearch);
window.addEventListener("keyup", handleWeatherSearch);

const messageBtn = document.querySelector("#message i");
messageBtn.addEventListener("click", hideNotFoundMessage);
