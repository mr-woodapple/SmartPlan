// Created 2023-11-15

// Import modules
import * as timetableHandler from './modules/timetableHandler.js';


// Select DOM elements
const classSelected = document.querySelector(".select-class")

// Add event listeners
classSelected.addEventListener("change", function() { timetableHandler.updateSelectedClass(classSelected) });
