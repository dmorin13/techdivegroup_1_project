var express = require('express');
var router = express.Router();
const  {
  getExam, 
  getExams,
  postExam,
  deleteExam,
  updateExam,
  
} = require('../controllers/examController');




// Request Handlers

//Get all exams
router.get("/", getExams);

//Get single exam
router.get("/:id", getExam);

//Post new exam
router.post("/", postExam);

//Delete exam
router.delete("/:id", deleteExam);

//Update exam
router.patch("/:id", updateExam );

module.exports = router;
