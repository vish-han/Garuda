const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT=8000;

mongoose.connect("mongodb+srv://vishaldev09:vishal1234@cluster0.npdpway.mongodb.net/?retryWrites=true&w=majority")
.then(console.log('Connected to MongoDB Successfully'))
.catch(console.error)

// routes here
const EventRoute = require("./routes/EventRoutes");

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use("/event", EventRoute);

app.get("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`);
}); 