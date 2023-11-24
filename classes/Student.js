const Person = require('./Person').Person

class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = []
        this.id = null
    }
    setId(id) {
        if (this.id == null) {
            this.id = id
            return 'You now have an ID'
        }
        else {
            return 'You already have an ID'
        }
    }
    getId() {
        return this.id
    }
    addGrade(course, grade) {
        this.grades.push([course.name, grade])
    } 
    getGrades() {
        return this.grades
    }
    getAverageGrade() {
        let total = 0
        let max = this.grades.length
        if (this.grades.length == 0) {
            return -1
        }
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i][1]
            if (i == max - 1) {
                return total / max
            }
        }
    }
    description() {

    }
}

module.exports = {
    Student
}

