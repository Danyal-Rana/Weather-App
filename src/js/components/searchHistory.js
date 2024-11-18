export function displaySearchHistory(searchedCities, onCityClick) {
    const searchHistory = document.getElementById('searchHistory');
    searchHistory.innerHTML = searchedCities.map(city => `
        <button onclick="searchCity('${city}')">${city}</button>
    `).join('');
}

export function addToSearchHistory(city, searchedCities) {
    if (!searchedCities.includes(city)) {
        searchedCities.unshift(city);
        // if (searchedCities.length > 5) searchedCities.pop();
        localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
    }
    return searchedCities;
}

export function clearSearchHistory() {
    localStorage.removeItem('searchedCities');
    return [];
}