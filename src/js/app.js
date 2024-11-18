import { fetchWeatherData, fetchForecastData } from './api/weatherApi.js';
import { displayCurrentWeather, displayWeatherDetails } from './components/currentWeather.js';
import { displayForecast } from './components/forecast.js';
import { displaySearchHistory, addToSearchHistory, clearSearchHistory } from './components/searchHistory.js';
import { updateBackgroundImage } from './utils/weatherUtils.js';

let isMetric = true;
let searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || [];

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const unitToggle = document.getElementById('unitToggle');
const unitDisplay = document.getElementById('unitDisplay');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyPopup = document.getElementById('historyPopup');
const closePopupBtn = document.getElementById('closePopupBtn');

searchBtn.addEventListener('click', () => handleSearch());
unitToggle.addEventListener('click', toggleUnit);
viewHistoryBtn.addEventListener('click', openHistoryPopup);
clearHistoryBtn.addEventListener('click', () => {
    searchedCities = clearSearchHistory();
    displaySearchHistory(searchedCities, searchCity);
});
closePopupBtn.addEventListener('click', closeHistoryPopup);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

window.addEventListener('load', () => {
    displaySearchHistory(searchedCities, searchCity);
    handleSearch('Multan');
});

async function handleSearch(city = cityInput.value.trim()) {
    if (city) {
        try {
            const weatherData = await fetchWeatherData(city, isMetric);
            displayCurrentWeather(weatherData, isMetric);
            displayWeatherDetails(weatherData, isMetric);
            const forecastData = await fetchForecastData(city, isMetric);
            displayForecast(forecastData);
            searchedCities = addToSearchHistory(city, searchedCities);
            displaySearchHistory(searchedCities, searchCity);
            updateBackgroundImage(weatherData.weather[0].main);
        } catch (error) {
            displayError(error.message);
        }
    } else {
        displayError('Please enter a city name.');
    }
}

function toggleUnit() {
    // Toggle the isMetric flag
    isMetric = !isMetric;

    // Update the unit display text
    unitDisplay.textContent = isMetric ? 'Celsius' : 'Fahrenheit';

    // Select the toggle icon element
    const myToggle = document.getElementsByClassName('toggle')[0];

    // Toggle the icon class based on isMetric state
    if (isMetric) {
        myToggle.classList.add('fa-toggle-off');
        myToggle.classList.remove('fa-toggle-on');
    } else {
        myToggle.classList.add('fa-toggle-on');
        myToggle.classList.remove('fa-toggle-off');
    }

    // Trigger search if there’s a city name in the input field
    if (cityInput.value.trim()) handleSearch();
}


function openHistoryPopup() {
    historyPopup.style.display = 'block';
}

function closeHistoryPopup() {
    historyPopup.style.display = 'none';
}

function searchCity(city) {
    cityInput.value = city;
    handleSearch();
    closeHistoryPopup();
}

function displayError(message) {
    const currentWeather = document.getElementById('currentWeather');
    const weatherDetails = document.getElementById('weatherDetails');
    const forecast = document.getElementById('forecast');
    
    currentWeather.innerHTML = `<div class="error-message">${message}</div>`;
    weatherDetails.innerHTML = 'No Weather Details avilable';
    forecast.innerHTML = 'No Forecast Data avilable';
}