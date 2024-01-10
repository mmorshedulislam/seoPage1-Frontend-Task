const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  originalname: String,
  extension: String,
  // You may want to store the file path or URL instead of the buffer
  content: Buffer,
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
