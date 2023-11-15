// Created 2023-11-15
// Reads which timetable has been selected

import TTit233A from '../../timetables/C_IT23-3-A.json' assert { type: 'json' };

export function updateSelectedClass(selectedClass) {

    // ideally automate this to get all files in the "timetables" folder and check if a matchin file is present
    switch (selectedClass.value) {
        case "it-23-3-A":
            console.log("Timetable found!");

            // Call function to output the JSON data via HTML
            AddHTML(TTit233A);

            break;

        case "it-23-3-B":
            console.log("Timetable found!");
            break;

        default:
            console.log("Error, no matching timetable found.");
            break;
    }
}

// TODO: Make this read from the actual json file
function AddHTML(timetable) {
    // run this for every entry (lesson) in timetable

    const lesson = document.createElement("div");
    lesson.classList.add('row', 'justify-content-start', 'rounded', 'm-1', 'py-2', 'align-items-center', 'lesson')
    
    // create start & end time col
    const col1 = document.createElement("div");
    col1.classList.add("col-auto");

    const startTime = document.createElement("p");
    startTime.classList.add("lesson-start-time", "m-0");
    startTime.textContent = "xx:xx";
    col1.appendChild(startTime);

    const endTime = document.createElement("p");
    endTime.classList.add("lesson-end-time", "m-0");
    endTime.textContent = "xx:xx";
    col1.appendChild(endTime);

    lesson.appendChild(col1);


    // Create topic and metadata col
    const col2 = document.createElement("div");
    col2.classList.add("col");

    const title = document.createElement("h4");
    title.textContent = "Placeholder";
    col2.appendChild(title);

    const metadata = document.createElement("p");
    metadata.classList.add("m-0");
    metadata.textContent = "Room: xxx | Teacher: xxx";
    col2.appendChild(metadata);

    lesson.appendChild(col2);


    // create info icon (if required)
    const col3 = document.createElement("div");
    col3.classList.add("col-auto");

    const infoIcon = document.createElement("p");
    infoIcon.classList.add("m-0");
    infoIcon.textContent = "Icon tba";
    col3.appendChild(infoIcon);

    lesson.appendChild(col3);
    

    // get the location and add it
    const parentDiv = document.querySelector(".lesson-wrapper");
    parentDiv.appendChild(lesson);
}