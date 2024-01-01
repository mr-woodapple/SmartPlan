// Resembles a table from the vertretungsplan PDF
// Will hold various information and multiple Lesson objects

class SubstitutionObject {

    constructor(className, lessons) {
        this.className = className // string
        this.lessons = lessons // list
    }
}

module.exports = SubstitutionObject;