const express=require('express')
const router=express.Router()

const courseController = require('/Users/aimar/Stuff/OOP-Basics/controllers/courses')

router.get("/:name", (req, res) => courseController.getCourseName(req, res))

router.get("/:name/grades", (req, res) => courseController.getCourseGrades(req, res))


module.exports= router;