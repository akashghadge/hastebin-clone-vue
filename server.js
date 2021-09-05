"use strict";
// inital set up of server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;



// must needed packages
const cros = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");


// middlewares
app.use(express.json());
app.use(cros());
app.use(cookieParser());


// getting db connection
require("./DB/conn");


// api routers
const Code = require("./routes/Code.route");
// routes setting
app.use('/api/code', Code);


// for production use
app.use(express.static("client/dist"));
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})




app.listen(port, () => {
    console.log("Server is listening on port ", port);
})