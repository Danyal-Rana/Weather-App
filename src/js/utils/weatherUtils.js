export function getWindDirection(degree) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(degree / 22.5) % 16];
}

export function updateBackgroundImage(weatherCondition) {
    let imageUrl;
    switch(weatherCondition.toLowerCase()) {
        case 'clear':
            imageUrl = 'https://example.com/sunny-background.jpg';
            break;
        case 'clouds':
            imageUrl = 'https://example.com/cloudy-background.jpg';
            break;
        case 'rain':
        case 'drizzle':
            imageUrl = 'https://example.com/rainy-background.jpg';
            break;
        case 'thunderstorm':
            imageUrl = 'https://example.com/stormy-background.jpg';
            break;
        case 'snow':
            imageUrl = 'https://example.com/snowy-background.jpg';
            break;
        default:
            imageUrl = 'https://example.com/default-background.jpg';
    }
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// export default function Component() {
//     return null; // This is a module file, not a React component
// }