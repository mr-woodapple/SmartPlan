// Created 2023-11-16


// load correct json, return json object
export function loadJSON(selectedTimetable) {

    // ideally automate this to get all files in the "timetables" folder and check if a matchin file is present
    switch (selectedTimetable.value) {
        case "it-23-3-A":
            console.log("Timetable found!");

            const timetable = require('../../timetables/C_IT23-3-A.json')
            console.log(timetable)
            return timetable;
            break;

        case "it-23-3-B":
            console.log("Timetable found!");
            break;

        default:
            console.log("Error, no matching timetable found.");
            break;
    }
}
