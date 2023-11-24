const express = require('express')

const students = require('../data/example').students_list

const getStudentName = (req, res) => {
    for (let student of students) {
        if (student.name === req.params.name) {
            res.json ({name: student.name})
        }
    }
}

const getStudentGrades = (req, res) => {
    for (let student of students) {
        if (student.name === req.params.name) {
            res.json({grades: student.getGrades()})
        }
    }
    
}

module.exports = {
    getStudentName,
    getStudentGrades
}