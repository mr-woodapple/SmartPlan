// Created 2023-11-15

// Import modules
import * as timetableHandler from './modules/timetableHandler.js';
import * as jsonHandler from './modules/jsonHandler.js';


// Select DOM elements
const timetableSelected = document.querySelector(".select-timetable")
const nextDay = document.querySelector(".prev-day")
const prevDay = document.querySelector(".next-day")

// Add event listeners
timetableSelected.addEventListener("change", onTimetableSelected);
nextDay.addEventListener("click", loadNextDay)
prevDay.addEventListener("click", loadPrevDay)




function onTimetableSelected() {
    // parse JSON, load correct timetable
    const timetable = jsonHandler.loadJSON(timetableSelected)

    // erase data that might be present
    // get array with weekdays
    // get array with full data
    // get current day
    
}

function loadNextDay() {
    console.log('next day')
}

function loadPrevDay() {
    console.log('prev day')
}
