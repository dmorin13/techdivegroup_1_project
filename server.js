require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const examRoutes = require('./routes/examRoutes');
//const createError = require("http-errors");
//const cors = require('cors');

const app = express();

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to db
//mongoose.set("strictQuery", false); //?      
mongoose
  .connect(process.env.MONGO_URI)   //?
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  app.use('/api/exams', examRoutes)


