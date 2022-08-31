const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// routes here

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Vasudevrani:mongoAtlasByVasu@cluster0.pxefb1c.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("app connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(8000, () => {
  console.log(`server listening to 8000`);
});
