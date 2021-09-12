require("dotenv").config({path: "./config.env"});

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

//app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));