import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';



// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

//mongoDB configuration
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/bookbuddies", router)

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
