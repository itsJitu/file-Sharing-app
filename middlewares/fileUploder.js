const path = require("node:path");
const multer = require("multer");

const fileStoragePath = path.join(__dirname, "../uploaded_files");

const storage = multer.diskStorage({
    destination: fileStoragePath
});

const uploader = multer({
    storage: storage
});

module.exports = uploader;