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
const imageInfoSchema = new Schema(
  {
    file: String,
    slide: Boolean,
    date: String,
    project: String,
    type: String,
  },
  { collection: "images" }
);

const ImageInfo = mongoose.model("images", imageInfoSchema);

app.get("/api", (req, res) => {
  ImageInfo.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
