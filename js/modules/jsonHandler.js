// Created 2023-11-16


// load correct json, return json object
export function loadJSON(selectedTimetable) {

    // ideally automate this to get all files in the "timetables" folder and check if a matchin file is present
    switch (selectedTimetable.value) {
        case "it-23-3-A":
            var request = new XMLHttpRequest();
            request.open("GET", "../../timetables/C_IT23-3-A.json", false);
            request.send(null);
            var timetable = JSON.parse(request.responseText);

            return timetable;

        case "it-23-3-B":
            var request = new XMLHttpRequest();
            request.open("GET", "../../timetables/C_IT23-3-B.json", false);
            request.send(null);
            var timetable = JSON.parse(request.responseText);

            return timetable;

        default:
            console.log("Error, no matching timetable found.");
            break;
    }
}
