const mongoose = require("mongoose");

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

module.exports = ImageInfo

