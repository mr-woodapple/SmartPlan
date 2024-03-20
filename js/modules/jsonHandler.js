/**
 * Load the correct json file for the selected class.
 * @param {*} selectedTimetable 
 * @returns JSON object of the timetable.
 */
export function loadJSON(selectedTimetable) {

    // ideally automate this to get all files in the "timetables" folder and check if a matchin file is present
    switch (selectedTimetable) {
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

        case "it-23-6-A":
            var request = new XMLHttpRequest();
            request.open("GET", "../../timetables/C_IT23-6-A.json", false);
            request.send(null);
            var timetable = JSON.parse(request.responseText);

            return timetable;

        case "it-23-6-B":
            var request = new XMLHttpRequest();
            request.open("GET", "../../timetables/C_IT23-6-B.json", false);
            request.send(null);
            var timetable = JSON.parse(request.responseText);

            return timetable;

        default:
            console.log("Error, no matching timetable found.");
            break;
    }
}
