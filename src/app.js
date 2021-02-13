// imports
import { initWeatherCard, handleWeatherSearch } from "./weather";

// initialize
initWeatherCard();

// listeners
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", handleWeatherSearch);
window.addEventListener("keyup", handleWeatherSearch);
