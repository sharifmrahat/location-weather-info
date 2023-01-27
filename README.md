
# Location Weather Info

Retrieve current weather information based on user's location.
## Features
Get Current Weather Information based on user's
- Co-ordinates (Latitude & Longitude)
- City Name
## Installation

Using npm:

```bash
$ npm install location-weather-info

```


## Example

**Step-1:** Import LocationWeatherInfo after installation:

```js
import LocationWeatherInfo from 'location-weather-info'
```

**Step-2:** Declare construction with your API KEY. Your can get your API_KEY from: [Open Weather](https://home.openweathermap.org/api_keys)

```js
const weather = new LocationWeatherInfo(API_KEY);
```

**Step-3:** Now you can get the current weather info based on Co-ordinates (Latitude & Longitude) or City Name.

```js
const weatherByCoords = weather.getWeatherByCoords(35, 139);
console.log(weatherByCoords);

const weatherByCity = weather.getWeatherByCity("Tokyo");
console.log(weatherByCity);

```
## Output
If you pass the required arguments you can get the resposnse with an object like:

```js
{success: true, data: weatherData}
```

If any error is occured then the resposnse will be:

```js
{success: false, error: errorMessage}
```
## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |




## Author

[@SharifRahat](https://www.github.com/sharifmrahat)

