// Created 2023-11-15

// Import modules
import * as renderHTML from './modules/htmlHandler.js';
import * as jsonHandler from './modules/jsonHandler.js';
import * as dateHandler from './modules/dateHandler.js'


// SELECT DOM ELEMENTS
const timetableSelected = document.querySelector(".select-timetable")
const nextDay = document.querySelector(".next-day")
const prevDay = document.querySelector(".prev-day")

// ADD EVENT LISTENERS
addEventListener("load", initializeApp);
timetableSelected.addEventListener("change", onTimetableSelected);
nextDay.addEventListener("click", loadNextDay)
prevDay.addEventListener("click", loadPrevDay)

// GLOBAL VARIABLES
var selectedWeekdayNumeric = dateHandler.getWeekDay();
var timetable;

/**
 * 
 */
function initializeApp() {
    // Check if we have a value in storage & if so load timetable
    if (localStorage.getItem('selectedTimetable') != null) {
        timetableSelected.value = localStorage.getItem('selectedTimetable');
        onTimetableSelected();
    }
}

function onTimetableSelected() {
    // Parse JSON, load selected timetable
    timetable = jsonHandler.loadJSON(timetableSelected.value);

    // Save the selected timetable to localStorage
    localStorage.setItem('selectedTimetable', timetableSelected.value);

    // Update the HTML
    updateTimetable();
}

function updateTimetable() {
    // Render human readable weekday name
    renderHTML.renderWeekday(dateHandler.getReadableWeekday(selectedWeekdayNumeric))

    // Render HTML for given weekday
    renderHTML.renderLessonHTML(timetable[selectedWeekdayNumeric])
}


// Update selectedDay & then the HTML files
function loadNextDay() {
    if (selectedWeekdayNumeric == 6) {
        selectedWeekdayNumeric = 0;
    } else {
        selectedWeekdayNumeric += 1;
    }

    updateTimetable();
}

/**
 * 
 */
function loadPrevDay() {
    if (selectedWeekdayNumeric == 0) {
        selectedWeekdayNumeric = 6;
    } else {
        selectedWeekdayNumeric -= 1;
    }

    updateTimetable();
}
