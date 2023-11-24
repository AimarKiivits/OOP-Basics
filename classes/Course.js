class Course {
    constructor(name, ) {
        this.name = name
        this.grades = []
    }
    addGrade(student, grade) {
        this.grades.push([student.name, grade])

    }
    getGrades() {
        let temp = []
        for (let i = 0; i < this.grades.length; i++) {
            temp.push(this.grades[i])
        }
        return temp
    }
    getAverageGrade() {
        let total = 0
        let max = this.grades.length
        if (this.grades.length == 0) {
            return -1
        }
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i][0]
            if (i == max - 1) {
                return total / max
            }
        }
    }
    description() {
        return 'derp'
    }
}

module.exports = {
    Course
}