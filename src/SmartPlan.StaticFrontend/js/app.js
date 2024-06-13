// Import modules
import * as renderHTML from './modules/htmlHandler.js';
import * as jsonHandler from './modules/jsonHandler.js';
import * as dateHandler from './modules/dateHandler.js'


// SELECT DOM ELEMENTS
//const timetableSelected = document.querySelector(".select-timetable")
const nextDay = document.querySelector(".next-day")
const prevDay = document.querySelector(".prev-day")

// ADD EVENT LISTENERS
addEventListener("load", initializeApp);
//timetableSelected.addEventListener("change", onTimetableSelected);
nextDay.addEventListener("click", loadNextDay)
prevDay.addEventListener("click", loadPrevDay)

// GLOBAL VARIABLES
var timetable;
var selectedWeekdayNumeric = dateHandler.getWeekDay();


/**
 * Method initializing the app on page load.
 */
function initializeApp() {
    // Check if we have a value in storage & if so load timetable
    if (localStorage.getItem('selectedTimetable') != null) {
        onTimetableSelected(localStorage.getItem('selectedTimetable'));
    }
}


/**
 * Translator function to extract the value attribute from the HTML we pass along.
 * This is required, because we can't set the timetable name as string in the onclick event.
 * 
 * @param {*} timetableElement The HTML <a> attribute the user selects.
 */
export function selectedTimetableTranslator(timetableElement) {
    onTimetableSelected(timetableElement.getAttribute("value"));
}


function onTimetableSelected(timetableName) {
    // Parse JSON, load selected timetable
    timetable = jsonHandler.loadJSON(timetableName);

    // Save the selected timetable to localStorage
    localStorage.setItem('selectedTimetable', timetableName);

    // Update the HTML
    updateTimetable();
    document.querySelector('.timetable-name').innerHTML = timetableName;
}


/**
 * Calls the methods rendering new day name and matching lessons.
 */
function updateTimetable() {
    // Render human readable weekday name
    renderHTML.renderWeekday(dateHandler.getReadableWeekday(selectedWeekdayNumeric))

    // Render HTML for given weekday
    renderHTML.renderLessonHTML(timetable[selectedWeekdayNumeric])
}

/**
 * Update the selected day & render new html.
 */
function loadNextDay() {
    if (selectedWeekdayNumeric == 6) {
        selectedWeekdayNumeric = 0;
    } else {
        selectedWeekdayNumeric += 1;
    }

    updateTimetable();
}

/**
 * Update the selected day & render new html.
 */
function loadPrevDay() {
    if (selectedWeekdayNumeric == 0) {
        selectedWeekdayNumeric = 6;
    } else {
        selectedWeekdayNumeric -= 1;
    }

    updateTimetable();
}
