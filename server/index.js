const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT=8000;
app.get("/",(req, res) => {
    res.send("hello world!");
})

mongoose.connect("mongodb+srv://vishaldev09:vishal1234@cluster0.npdpway.mongodb.net/?retryWrites=true&w=majority")
.then(console.log('Connected to MongoDB Successfully'))
.catch(console.error)

app.listen(PORT,()=>{
    console.log(`listening on port${PORT}`);
});