const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  patient_Id: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  image_URL: {
    type: String,
    required: true,
  }
  
});


module.exports = mongoose.model('Exam', examSchema);
