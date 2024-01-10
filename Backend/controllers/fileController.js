// controllers/fileController.js
const File = require("../models/File");

exports.uploadFile = async (req, res) => {
  try {
    const { filename, originalname, extension } = req.file;
    const newFile = new File({ filename, originalname, extension });
    await newFile.save();

    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.countFiles = async (req, res) => {
  try {
    const fileCount = await File.countDocuments();
    res.status(200).json({ count: fileCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
