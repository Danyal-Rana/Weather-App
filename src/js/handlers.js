// handlers.js

export function toggleUnit(isMetric, unitDisplay) {
    isMetric = !isMetric;
    unitDisplay.textContent = isMetric ? 'Celsius' : 'Fahrenheit';
    return isMetric;
}

export function openHistoryPopup(historyPopup) {
    historyPopup.style.display = 'block';
}

export function closeHistoryPopup(historyPopup) {
    historyPopup.style.display = 'none';
}

export function addSearchHistory(city, searchedCities, displaySearchHistory) {
    if (!searchedCities.includes(city)) {
        searchedCities.unshift(city);
        if (searchedCities.length > 5) searchedCities.pop();
        localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
        displaySearchHistory();
    }
}