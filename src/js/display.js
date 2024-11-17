// display.js

import { getWindDirection } from './utils.js';

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
            <span>${new Date().toLocaleDateString('en-US', { weekday: 'short' })} ${Math.round(data.main.temp_max)}° ${Math.round(data.main.temp_min)}°</span>
            <span>Air quality: ${data.main.aqi || 'N/A'} - Good</span>
        </div>
    `;
}

export function displayWeatherDetails(data, isMetric) {
    const tempUnit = isMetric ? '°C' : '°F';
    const windUnit = isMetric ? 'm/s' : 'mph';
    const weatherDetails = document.getElementById('weatherDetails');
    weatherDetails.innerHTML = `
        <div class="detail"><span>Feels like</span><span>${Math.round(data.main.feels_like)}${tempUnit}</span></div>
        <div class="detail"><span>${data.wind.deg ? getWindDirection(data.wind.deg) : 'Wind'}</span><span>${data.wind.speed} ${windUnit}</span></div>
        <div class="detail"><span>Humidity</span><span>${data.main.humidity}%</span></div>
        <div class="detail"><span>UV</span><span>${data.uvi || 'N/A'}</span></div>
        <div class="detail"><span>Visibility</span><span>${(data.visibility / 1000).toFixed(1)} km</span></div>
        <div class="detail"><span>Pressure</span><span>${data.main.pressure} hPa</span></div>
    `;
}

export function displayForecast(data) {
    const forecast = document.getElementById('forecast');
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();

    forecast.innerHTML = dailyData.slice(0, 5).map((day, index) => {
        const forecastDay = (today + index) % 7;
        return `
            <div class="forecast-day">
                <span>${daysOfWeek[forecastDay]}</span>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
                <span>${Math.round(day.main.temp_max)}°</span>
                <span>${Math.round(day.main.temp_min)}°</span>
            </div>
        `;
    }).join('');
}

export function displayError(message) {
    const currentWeather = document.getElementById('currentWeather');
    const weatherDetails = document.getElementById('weatherDetails');
    const forecast = document.getElementById('forecast');
    currentWeather.innerHTML = `<div class="error-message">${message}</div>`;
    weatherDetails.innerHTML = '';
    forecast.innerHTML = '';
}