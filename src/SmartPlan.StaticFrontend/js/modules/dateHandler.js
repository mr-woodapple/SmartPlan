/**
 * Returns human readable name for the argument day (int)
 * 
 * @param {*} day Number of the day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 * @returns String of the current day.
 */
export function getReadableWeekday(day) {
    const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    return weekdays[day];
}

// Get current day as int value (from 0 = Sunday to 6 = Saturday)
export function getWeekDay() {
    return new Date(Date.now()).getDay();
}