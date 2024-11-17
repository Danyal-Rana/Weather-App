// main.js

import { fetchWeatherData, fetchForecastData } from './api.js';
import { displayCurrentWeather, displayWeatherDetails, displayForecast, displayError } from './display.js';
import { toggleUnit, openHistoryPopup, closeHistoryPopup, addSearchHistory } from './handlers.js';
import { getSearchHistory, clearSearchHistory } from './storage.js';
import { updateBackgroundImage } from './utils.js';

let isMetric = true;
const unitDisplay = document.getElementById('unitDisplay');
const historyPopup = document.getElementById('historyPopup');
const searchHistory = document.getElementById('searchHistory');

// Initialize
window.addEventListener('load', () => {
    const searchedCities = getSearchHistory();
    displaySearchHistory(searchedCities);
    handleSearch('Islamabad');
});

document.getElementById('searchBtn').addEventListener('click', () => handleSearch());
document.getElementById('unitToggle').addEventListener('click', () => {
    isMetric = toggleUnit(isMetric, unitDisplay);
    handleSearch();
});
document.getElementById('viewHistoryBtn').addEventListener('click', () => openHistoryPopup(historyPopup));
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    clearSearchHistory();
    displaySearchHistory([]);
});
document.getElementById('closePopupBtn').addEventListener('click', () => closeHistoryPopup(historyPopup));

// Handle search function
export async function handleSearch(city = document.getElementById('cityInput').value.trim()) {
    if (city) {
        try {
            const weatherData = await fetchWeatherData(city, isMetric);
            displayCurrentWeather(weatherData, isMetric);
            displayWeatherDetails(weatherData, isMetric);

            const forecastData = await fetchForecastData(city, isMetric);
            displayForecast(forecastData);

            addSearchHistory(city, searchedCities, displaySearchHistory);
            updateBackgroundImage(weatherData.weather[0].main);
        } catch (error) {
            displayError(error.message);
        }
    } else {
        displayError('Please enter a city name.');
    }
}

// Function to display search history
function displaySearchHistory(searchedCities) {
    searchHistory.innerHTML = searchedCities.map(city => `<button onclick="handleSearch('${city}')">${city}</button>`).join('');
}