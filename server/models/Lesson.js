// Lesson object

class Lesson {
    constructor(date, startTime, endTime, topic, teacher, room) {
        this.date = date,
        this.startTime = startTime,
        this.endTime = endTime,
        this.topic = topic,
        this.teacher = teacher,
        this.room = room
    }
}

module.exports = Lesson;