// controllers/fileController.js

const File = require("../models/File");

exports.uploadFiles = async (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => {
      const originalname = file.originalname;
      const extension = file.filename.split(".").pop();
      return { originalname, extension };
    });

    await File.insertMany(uploadedFiles); // Assuming you have a model named 'File'

    res
      .status(201)
      .json({ success: true, message: "Files uploaded successfully" });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.countFiles = async (req, res) => {
  try {
    const count = await File.countDocuments();
    res.json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
