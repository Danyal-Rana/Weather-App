export function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

export function getNextFiveDays() {
    const today = new Date().getDay();
    return Array.from({length: 5}, (_, i) => {
        const day = (today + i + 1) % 7;
        return getDayOfWeek(new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000));
    });
}

// export default function Component() {
//     return null; // This is a module file, not a React component
// }