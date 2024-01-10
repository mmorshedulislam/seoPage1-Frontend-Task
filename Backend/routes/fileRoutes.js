// routes/fileRoutes.js

const express = require("express");
const multer = require("multer");
const fileController = require("../controllers/fileController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), fileController.uploadFile);
router.get("/count", fileController.countFiles);

module.exports = router;
