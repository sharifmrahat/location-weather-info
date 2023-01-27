
# Location Weather Info

Retrieve current weather information based on user's location.
## Demo




## Features



## Installation

Using npm:

```bash
$ npm install location-weather-info
```

## Example

    1. Import LocationWeatherInfo after installation:

```js
import LocationWeatherInfo from 'location-weather-info'
```

    2. declare construction with your API KEY. Your can get your API_KEY from: https://home.openweathermap.org/api_keys (You must login to get your secret API_KEY)N.B: Save this into .env file.

```js
const weather = new LocationWeatherInfo(API_KEY);
```

    3. Now you can get the current weather info based on Co-ordinates or City Name.

```js
const weatherByCoords = weather.getWeatherByCoords(35, 139);
console.log(weatherByCoords);

const weatherByCity = weather.getWeatherByCity("Tokyo");
console.log(weatherByCity);

```
## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |




## Author

[@SharifRahat](https://www.github.com/sharifmrahat)

