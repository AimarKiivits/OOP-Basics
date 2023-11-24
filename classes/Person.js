class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setDateOfBirth(year) {
        this.birth_year = year
        return "Birth year set"
    }
    getDateOfBirth() {
        return this.birth_year
    }
    age() {
        let today = new Date()
        return today.getFullYear() - this.birth_year
    }
    description() {

    }
}

module.exports = {
    Person
}
