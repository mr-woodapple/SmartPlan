// Created 2023-11-15
// Reads which timetable has been selected


// Renders HTML from a lessons object.
export function renderLessonHTML(lessons) {

    var numberOfLessons = Object.keys(lessons).length;

    if (numberOfLessons == 0) {
        // generate info text that no data is available for that day
        const infoText = document.createElement("p")
        infoText.classList.add('row', 'justify-content-center', 'm-3', 'align-items-center', 'lessons')
        infoText.textContent = "No lessons for today. Yay! :)"

        // get the location and add it
        document.querySelector(".lessons").replaceWith(infoText);

    } else {
        const lessonsHTML = document.createElement("div");
        lessonsHTML.classList.add("lessons");

        // iterate over the lessons present, generate HTML for them
        for (var i = 0; i < numberOfLessons; i++) {

            // generate wrapper div
            const lesson = document.createElement("div");
            lesson.classList.add('row', 'd-flex', 'justify-content-start', 'rounded', 'my-2', 'py-2', 'align-items-center', 'lesson')
            
            // create start & end time col
            const col1 = document.createElement("div");
            col1.classList.add("col-auto");

            const startTime = document.createElement("p");
            startTime.classList.add("lesson-start-time", "m-0");
            startTime.textContent = lessons[i].startTime;
            col1.appendChild(startTime);

            const endTime = document.createElement("p");
            endTime.classList.add("lesson-end-time", "m-0");
            endTime.textContent = lessons[i].endTime;;
            col1.appendChild(endTime);

            lesson.appendChild(col1);


            // Create topic and metadata col
            const col2 = document.createElement("div");
            col2.classList.add("col");

            const title = document.createElement("h4");
            title.textContent = lessons[i].topic;
            col2.appendChild(title);

            const metadata = document.createElement("p");
            metadata.classList.add("m-0");
            metadata.textContent = "Room: " + lessons[i].room + " | Teacher: " + lessons[i].teacher;
            col2.appendChild(metadata);

            lesson.appendChild(col2);


            // create info icon (if required)
            const col3 = document.createElement("div");
            col3.classList.add("col-auto");

            const infoIcon = document.createElement("p");
            infoIcon.classList.add("m-0");
            col3.appendChild(infoIcon);

            lesson.appendChild(col3);
            

            // get the location and add it
            lessonsHTML.appendChild(lesson)
        }

        // get the location and add it
        document.querySelector(".lessons").replaceWith(lessonsHTML);
    }
}


// Renders an HTML weekday component, from the argument weekday (string)
export function renderWeekday(weekday) {
    const weekdayHeading = document.querySelector('.weekday')
    weekdayHeading.innerHTML = weekday;
}