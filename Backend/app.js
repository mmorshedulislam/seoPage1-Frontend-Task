// Install necessary packages:
// npm install express multer mongoose

// app.js

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://seopage1-db:zPFK5dMFOhPY0JTf@cluster0.mzbzmmm.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected successfully");
  });

// Create a Mongoose model for attachments
const attachmentSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  extension: String,
});

const Attachment = mongoose.model("Attachment", attachmentSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = `${Date.now()}${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.json({
    message: "Yay! Routes work",
  });
});

// API endpoint for file uploads
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { filename, originalname } = req.file;
    const extension = path.extname(originalname).substring(1); // Remove the dot from the extension

    // Save file details to the database
    const newAttachment = new Attachment({ filename, originalname, extension });
    await newAttachment.save();

    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// API endpoint to count attachments
app.get("/count", async (req, res) => {
  try {
    const count = await Attachment.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
