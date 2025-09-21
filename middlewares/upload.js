import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // where files are temporarily stored
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export { upload };