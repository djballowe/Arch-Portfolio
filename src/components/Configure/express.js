const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

const Schema = mongoose.Schema;
const imageInfoSchema = new Schema({
  file: String,
  slide: Boolean,
  date: String,
  project: String,
  type: String,
});

const ImageInfo = mongoose.model("ImageInfo", imageInfoSchema);

app.get("/api", (req, res) => {
  const data = {
    username: "David",
    age: 26,
  };
  ImageInfo.find({})
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  res.json(data);
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "Ballowe",
    age: 26,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
