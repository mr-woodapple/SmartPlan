// Created 2023-11-18


// Returns human readable name for the argument day (int)
export function getReadableWeekday(day) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return weekdays[day];
}

// Get current day as int value (from 0 = Sunday to 6 = Saturday)
export function getWeekDay() {
    return new Date(Date.now()).getDay();
}