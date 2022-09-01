const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const PORT=8000;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const UserRoute = require("./Routes/UserRoutes.js");
app.use('/',UserRoute);

mongoose.connect("mongodb+srv://vishaldev09:vishal1234@cluster0.npdpway.mongodb.net/?retryWrites=true&w=majority")
.then(console.log('Connected to MongoDB Successfully'))
.catch(console.error)

app.get("/",(req, res) => {
  res.send("hello world!");
})
app.listen(PORT,()=>{
    console.log(`listening on port${PORT}`);
}); 


// routes here

// middlewares


app.get("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});


