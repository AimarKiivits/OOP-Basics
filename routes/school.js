const express=require('express')
const router=express.Router()

const schoolController = require('/Users/aimar/Stuff/OOP-Basics/controllers/school')

router.get("/:name", (req,res) => schoolController.getSchoolName(req, res))

router.get("/:name/students", (req,res) => schoolController.getSchoolStudents(req, res))

router.get("/:name/courses", (req,res) => schoolController.getSchoolCourses(req, res))

module.exports= router;