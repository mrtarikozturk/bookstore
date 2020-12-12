const express = require('express');
const router = express.Router();
require('dotenv').config();
const connectDB = require('./models/connectDB');

//server
const app = express()
const port = process.env.port || 5000
app.listen(port, () => console.log(`'I am listening on port ${port}`));

//database connect
connectDB();
