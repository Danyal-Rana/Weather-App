export function getWindDirection(degree) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(degree / 22.5) % 16];
}

export function updateBackgroundImage(weatherCondition) {
    let imageUrl;
    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            imageUrl = 'https://images.unsplash.com/photo-1571878091425-0b948ed28d55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'smoke':
            imageUrl = 'https://images.unsplash.com/photo-1704590973061-258a406941e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'clouds':
            imageUrl = 'https://images.unsplash.com/photo-1527377844612-ae9febb890c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'rain':
        case 'drizzle':
            imageUrl = 'https://images.unsplash.com/photo-1545622757-7b91055c618b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'thunderstorm':
            imageUrl = 'https://images.unsplash.com/photo-1561485132-59468cd0b553?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'snow':
            imageUrl = 'https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'haze':
            imageUrl = 'https://images.unsplash.com/photo-1436459826008-8fd497f03742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        case 'fog':
            imageUrl = 'https://images.unsplash.com/photo-1642947945591-ce9153f8a5a7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;
        default:
            imageUrl = 'https://images.unsplash.com/photo-1698780717462-a757e4990f78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}