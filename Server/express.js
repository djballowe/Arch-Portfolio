const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI;
const routes = require("./Routes/api");

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use(cors());
app.use("/", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
