<h2 align="center">Weather App</h2>

<p align="center">
  <img width="500" style="border-radius: 8px;"alt="weather-app" src="https://user-images.githubusercontent.com/76179035/107866161-e8bb1f00-6e6d-11eb-8a2c-82b6fa8cf172.png">
</p>

## Description

This is a simple weather app that utilizes the OpenWeatherMap API. At the launching, the one and only view of the application displays the weather of the current location by reading the device's coordinates from the GPS. Later, the user can search for weather information in different cities of the world. If the city name provided is known by the API then the infomation will be displayed on the screen. Otherwise, a pop-up message will provide feedback to the user for the unsuccesfull request. The interaction with the API and the presentation of the weather information is done with AJAX.

## Packages

The packages used to build the app are the following:

- [`axios`](https://www.npmjs.com/package/axios) for the API requests
- [`dotenv-webpack`](https://www.npmjs.com/package/dotenv-webpack) for protecting the private API_KEY
