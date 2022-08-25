const express = require("express");
const router = express.Router();
const ImageInfo = require("../Models");

router.get("/api", (req, res) => {
  ImageInfo.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
