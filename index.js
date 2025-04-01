const express = require("express");
const careerRoutes = require("./src/routes/careerRoutes");
const connectDB = require("./src/config/db");
require("dotenv").config();

const app = express();
connectDB();
app.use(express.json());

app.use("/api/careers", careerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Career service running on port ${PORT}`));
