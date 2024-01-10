// app.js
const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/fileRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/fileupload";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database Connection Failed!");
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Yay! Routes working!",
  });
});

app.use("/uploads", express.static("uploads")); // Serve uploaded files statically
app.use("/api/files", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
