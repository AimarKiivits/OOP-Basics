const express = require('express')

const courses = require('../data/example').courses_list

const getCourseName = (req, res) => {
    for (let course of courses) {
        if (course.name === req.params.name) {
            res.json ({name: course.name})
        }
    }
}

const getCourseGrades = (req, res) => {
    for (let course of courses) {
        if (course.name === req.params.name) {
            res.json({grades: course.getGrades()})
        }
    }
}

module.exports = {
    getCourseGrades,
    getCourseName
}
