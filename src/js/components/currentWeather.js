import { getWindDirection } from '../utils/weatherUtils.js';

export function displayCurrentWeather(data, isMetric) {
    const tempUnit = isMetric ? '°C' : '°F';
    const currentWeather = document.getElementById('currentWeather');
    currentWeather.innerHTML = `
        <h1>${data.name}</h1>
        <div class="current-weather">
            <span class="temperature">${Math.round(data.main.temp)}${tempUnit}</span>
            <span class="weather-description">${data.weather[0].description}</span>
        </div>
        <div class="additional-info">
            <span>${new Date().toLocaleDateString('en-US', { weekday: 'short' })} ${Math.round(data.main.temp_max)}° - ${Math.round(data.main.temp_min)}°</span>
            <span>Air quality: ${data.main.aqi || 'N/A'} - Good</span>
        </div>
    `;
}

export function displayWeatherDetails(data, isMetric) {
    const tempUnit = isMetric ? '°C' : '°F';
    const windUnit = isMetric ? 'm/s' : 'mph';
    const weatherDetails = document.getElementById('weatherDetails');
    weatherDetails.innerHTML = `
        <div class="detail">
            <span>Feels like</span>
            <span>${Math.round(data.main.feels_like)}${tempUnit}</span>
        </div>
        <div class="detail">
            <span>${data.wind.deg ? getWindDirection(data.wind.deg) : 'Wind'}</span>
            <span>${data.wind.speed} ${windUnit}</span>
        </div>
        <div class="detail">
            <span>Humidity</span>
            <span>${data.main.humidity}%</span>
        </div>
        <div class="detail">
            <span>UV</span>
            <span>${data.uvi || 'N/A'}</span>
        </div>
        <div class="detail">
            <span>Visibility</span>
            <span>${(data.visibility / 1000).toFixed(1)} km</span>
        </div>
        <div class="detail">
            <span>Pressure</span>
            <span>${data.main.pressure} hPa</span>
        </div>
    `;
}