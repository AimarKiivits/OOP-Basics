const express=require('express')
const router=express.Router()

const studentController = require('/Users/aimar/Stuff/OOP-Basics/controllers/student')

router.get("/:name", (req, res) => studentController.getStudentName(req, res))

router.get("/:name/grades", (req, res) => studentController.getStudentGrades(req, res))


module.exports= router;