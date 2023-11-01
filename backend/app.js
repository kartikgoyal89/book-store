const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const app = express();
const cors = require('cors');

// MIDDLEWARES

app.use(express.json());
app.use(cors());
app.use("/books",router);



mongoose.connect("mongodb+srv://admin:kartik@cluster0.48wxsyt.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>
    console.log("Connected to Database!")).then(()=>{
        app.listen(5000)
    }).catch(()=>{
        console.log(err);
    })



// kartik