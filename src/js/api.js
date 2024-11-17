// api.js

const API_KEY = '1488641a1d241a8ad90eee95d4410a0d';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather data
export async function fetchWeatherData(city, isMetric = true) {
    const units = isMetric ? 'metric' : 'imperial';
    const response = await fetch(`${API_BASE_URL}/weather?q=${city}&units=${units}&appid=${API_KEY}`);
    if (!response.ok) throw new Error('City not found. Please try again.');
    return await response.json();
}

// Fetch 5-day forecast data
export async function fetchForecastData(city, isMetric = true) {
    const units = isMetric ? 'metric' : 'imperial';
    const response = await fetch(`${API_BASE_URL}/forecast?q=${city}&units=${units}&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Forecast data not available.');
    return await response.json();
}