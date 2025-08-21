require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/index.js");
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:8000",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Project Management System API");
});

connectDB()
  .then(() => {
    console.log("Database connection established successfully");
  })

  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Exit the process with failure
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
