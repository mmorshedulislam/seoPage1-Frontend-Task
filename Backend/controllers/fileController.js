const File = require("../models/File");

exports.uploadFiles = async (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => {
      return {
        originalname: file.originalname,
        extension: file.filename.split(".").pop(),
        // Assuming you have a 'files' collection in MongoDB
        // You may want to store the file path or URL instead of the buffer
        content: file.buffer, 
      };
    });

    await File.insertMany(uploadedFiles);

    res.status(201).json({ success: true, message: "Files uploaded successfully" });
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
