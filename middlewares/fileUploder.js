const path = require("node:path");

const multer = require("multer");

const fileStoragePath = path.join(__dirname, "../uploaded_files");

const storage = multer.diskStorage({
    destination: fileStoragePath,
    filename: (req, file, cb) => {
        console.log(file);
        const fileName = ""
        cb(null, filename)
    }
});

const uploader = multer({
    storage: storage
});

module.exports = uploader;