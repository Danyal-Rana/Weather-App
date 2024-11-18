import { getNextFiveDays } from '../utils/dateUtils.js';

export function displayForecast(data) {
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    const nextFiveDays = getNextFiveDays();
    const forecast = document.getElementById('forecast');

    forecast.innerHTML = dailyData.slice(0, 5).map((day, index) => `
        <div class="forecast-day">
            <span>${nextFiveDays[index]}</span>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
            <span>${Math.round(day.main.temp_max)}°</span>
            <span>${Math.round(day.main.temp_min)}°</span>
        </div>
    `).join('');
}