// Created 2023-11-15

// Import modules
import * as renderHTML from './modules/htmlHandler.js';
import * as jsonHandler from './modules/jsonHandler.js';
import * as dateHandler from './modules/dateHandler.js'
import { sniffData } from './modules/dataSniffer.js';


// SELECT DOM ELEMENTS
const timetableSelected = document.querySelector(".select-timetable")
const nextDay = document.querySelector(".next-day")
const prevDay = document.querySelector(".prev-day")

// ADD EVENT LISTENERS
document.addEventListener("DOMContentLoaded", init);
timetableSelected.addEventListener("change", onTimetableSelected);
nextDay.addEventListener("click", loadNextDay)
prevDay.addEventListener("click", loadPrevDay)

// GLOBAL VARIABLES
var selectedWeekdayNumeric = dateHandler.getWeekDay();
var timetable;


// called after the DOM has loaded
function init() {
    getLiveData();
}

function getLiveData() {
    const data = sniffData();
}


// Defines what happens when a timetable is selected
function onTimetableSelected() {
    // Parse JSON, load selected timetable
    timetable = jsonHandler.loadJSON(timetableSelected)

    updateTimetable();
}

// Renders HTML for both the weekday & the lessons for that day
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


function loadPrevDay() {
    if (selectedWeekdayNumeric == 0) {
        selectedWeekdayNumeric = 6;
    } else {
        selectedWeekdayNumeric -= 1;
    }

    updateTimetable();
}
