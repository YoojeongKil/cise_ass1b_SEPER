require("dotenv").config({path: "./config.env"});

const express = require('express');
const connectDB = require('./config/db');
//var cors = require('cors');

const app = express();

// Connect Database
connectDB();

//cors
//app.use(cors({origin: true, credentials: true}));

//app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));