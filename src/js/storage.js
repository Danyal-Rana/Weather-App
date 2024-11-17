// storage.js

export function getSearchHistory() {
    return JSON.parse(localStorage.getItem('searchedCities')) || [];
}

export function clearSearchHistory() {
    localStorage.removeItem('searchedCities');
}