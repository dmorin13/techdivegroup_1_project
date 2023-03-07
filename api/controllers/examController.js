const Exam = require('../model/examModel');
const mongoose = require('mongoose');


//get all exams
const getExams = async (req, res) => {
  // sort by time posted
  const exams = await Exam.find({}).sort({createdAt: -1});    
  res.status(200).json(exams);

}; 
//get single exam
const getExam = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "no such exam exists."});
  }
  const exam = await Exam.findById(id);
  if(!exam) {
    return res.status(404).json({error: 'No such exam exists.'});
  }
  res.status(200).json(exam);

}
//create exam
const postExam = async (req, res) => {
  const { name, patient_Id, age, sex, zip, bmi, weight, image_URL } = req.body;
  try {
    const exam = await Exam.create({
      name: req.body.name,
      patient_Id: req.body.patient_Id,
      age: req.body.age,
      sex: req.body.sex,
      zip: req.body.zip,
      bmi: req.body.bmi,
      weight: req.body.weight,
      image_URL: req.body.image_URL,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete exam
const deleteExam = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such exam exists." });
  }
  const exam = await Exam.findOneAndDelete({_id: id});

  if (!exam) {
    return res.status(400).json({ error: "No such exam exists." });
  }
  res.status(200).json(exam);
};
//update exam
const updateExam = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such exam exists." });
  }
  const exam = await Exam.findOneAndUpdate({ _id: id },{ ...req.body});
  if (!exam) {
    return res.status(400).json({ error: "No such exam exists." });
  }
  res.status(200).json(exam);
};

module.exports = {
  getExam, 
  getExams,
  postExam,
  deleteExam,
  updateExam,
  
};

