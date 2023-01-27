const axios = require("axios");

class LocationWeatherInfo {
  constructor(key) {
    this.apiKey = key;
  }

  async getWeatherByCoords(lat, lon) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
      const response = await axios.get(url);
      console.log(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, data: error };
    }
  }

  async getWeatherByCity(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
      const response = await axios.get(url);
      console.log(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, data: error };
    }
  }
}

module.exports = LocationWeatherInfo;
