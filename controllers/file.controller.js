const uploadFile = (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "File uploaded successfully"
    })
};

const shareFile = (req, res) => {
    res.json({
        success: true,
        message: "file share Succesfully"
    })
};

const fileController = {
    uploadFile,
    shareFile
};

module.exports = fileController;