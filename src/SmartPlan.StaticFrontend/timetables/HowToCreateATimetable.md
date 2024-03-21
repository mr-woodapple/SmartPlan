# How to write a timetable:

Timetables are simple JSON notation based text-files. There are a couple of things to watch out for when generating a lesson.

Let's look at a full day first (you can have up to 7 days in a timetable, bi-weekly stuff is not supported yet): 

```
"2" : [ 
    {
        "startTime" : "07:15",
        "endTime" : "08:45",
        "topic" : "IT-LF 2",
        "teacher" : "Kiel",
        "room" : "B303"
    },
    {
        "startTime" : "09:15",
        "endTime" : "10:45",
        "topic" : "ENG",
        "teacher" : "Pohle",
        "room" : "B406"
    },
    {
        "startTime" : "11:00",
        "endTime" : "12:30",
        "topic" : "IT-LF 5",
        "teacher" : "Bardon",
        "room" : "B409"
    }
]
```
### In more detail:  
`"2" : [ ]`  is the weekday. It ranges from 0 = Sunday to 6 = Saturday. The brackets wrape around the content for that day.  

`{ }` mark a single lesson. Each day can have unlimited amount of lessons, seperated by a comma after each lesson (except for the last one). Required values are `startTime`, `endTime`, `topic`, `teacher` and `room`. 

