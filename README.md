
# Location Weather Info

Retrieve current weather information based on user's location.
## Demo
Home Page: [Location Weather Info](https://location-weather-info.vercel.app/)
## Features
Get user's current weather information based on:
- Co-ordinates (Latitude & Longitude)
- Location Name (Street/City/State/Country)
## Installation

Using npm:

```bash
$ npm install location-weather-info

```
Using yarn:

```bash
$ yarn add location-weather-info

```

## Example

**Step-1:** Import LocationWeatherInfo after installation.

```js
import LocationWeatherInfo from 'location-weather-info'
```

**Step-2:** Declare the constructor and pass your API KEY. Your can get your API_KEY from [Open Weather Map](https://home.openweathermap.org/api_keys). You must login to get your secret key.

```js
const weather = new LocationWeatherInfo(API_KEY);
```

**Step-3:** Now you can get the current weather info based on Co-ordinates (Latitude & Longitude) or Location Name.

```js
//Get weather by Co-ordinates (latitude, longitude)
const weatherByCoords = weather.getWeatherByCoords(35, 139);
console.log(weatherByCoords);

//Get weather by Location Name
const weatherByLocationName = weather.getWeatherByLocation("Tokyo");
console.log(weatherByLocationName);

```
N.B: Both function returns promise, it might be needed to handle from client side.
## Output
If you pass the required arguments then you will get the response with an object like:

```js
{success: true, data: weatherData}
```

If any error is occurred then the response will be:

```js
{success: false, error: errorMessage}
```
## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Caution
This open source project is beginner friendly and made only for learning puporse, where we used Open Weather Map v2.5 with free-tier API end points. That's why your secret API key may revealed as payload. So in case of production you may purchase and handle the API end points manually instead of using this package. Also you can follow their guidline [here.](https://home.openweathermap.org/api_keys)
## Author

[@SharifRahat](https://www.github.com/sharifmrahat)

