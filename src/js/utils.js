// utils.js

export function getWindDirection(degree) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(degree / 22.5) % 16];
}

export function updateBackgroundImage(weatherCondition) {
    let imageUrl;
    switch(weatherCondition.toLowerCase()) {
        case 'clear': imageUrl = 'https://images.unsplash.com/photo-1571878091425-0b948ed28d55'; break;
        case 'clouds': imageUrl = 'https://images.unsplash.com/photo-1527377844612-ae9febb890c0'; break;
        case 'rain': case 'drizzle': imageUrl = 'https://images.unsplash.com/photo-1545622757-7b91055c618b'; break;
        // Add more cases as needed
        default: imageUrl = 'https://images.unsplash.com/photo-1698780717462-a757e4990f78';
    }
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}