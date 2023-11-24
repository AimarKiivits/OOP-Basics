const Student = require('./Student').Student
const Course = require('./Course').Course


class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
    }
    addCourse(course) {
        if (this.courses.includes(course) == true) {
            return 'Course already exists'
        }
        else {
            this.courses.push(course)
            return 'Course added'
        }

    }
    addStudent(student) {
        if (this.students.includes(student) == false) {
            this.students.push(student)
            let id = Math.round(Math.random() * 10000)
            student.setId(id)
        }
    }
    addStudentGrade(student, course, grade) {
        if ((this.students.includes(student) == true) && (this.courses.includes(course) == true)) {
            course.addGrade(student, grade)
            student.addGrade(course, grade)
        }

    }
    getStudents() {
        return this.students
    }
    getCourses() {
        return this.courses
    }
    getStudentsOrderedByAverageGrade() {
        let sorted = []
        let averages = []
        for (let student of this.students) {
            averages.push(student.getAverageGrade())
        }
        averages.sort(function(a, b){return b - a})
        for (let average of averages) {
            for (let student of this.students) {
                if (student.getAverageGrade() == average) {
                    sorted.push(student)
                }
            }
        }
        return sorted
    }
}

module.exports = {
    School
}


