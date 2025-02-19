const multer = require("multer");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// ✅ Ensure the directory exists before saving
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const ensureDirectoryExists = (uploadPath) => {
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true }); // ✅ Use recursive to create nested directories
  }
};

// ✅ Multer storage config (temporary storage before processing)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const storage = multer.memoryStorage(); // ✅ Store in memory to process with Sharp

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // ✅ 10MB max file size
});

const uploadFields = upload.fields([{ name: "images", maxCount: 10 }]);

// ✅ Middleware to process images with Sharp
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const processImages = async (req, res, next) => {

  // req.body.formData.entries().forEach((entry) => {
  //   console.log(entry[0], entry[1]);
  // });
  console.log(req.body.formData)
  if (!req.files || !req.files.images) {
    return next();
  }

  try {
    const processedImages = await Promise.all(
      req.files.images.map(async (file) => {
        const uploadPath = req.body.identity
          ? "src/storage/upload/image/universities/"
          : req.body.firstName
            ? "src/storage/upload/image/profile/"
            : "src/storage/upload/image/blogs/";


        ensureDirectoryExists(uploadPath);

        const filename = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
        const filePath = path.join(uploadPath, filename);

        // ✅ Process image with Sharp (resize, optimize)
        await sharp(file.buffer)
          .resize({ width: 1500 }) // ✅ Resize to high quality width (adjust as needed)
          .jpeg({ quality: 90 }) // ✅ Convert to high-quality JPEG
          .toFile(filePath);

        return filePath;
      })
    );

    req.processedImages = processedImages;
    next();
  } catch (error) {
    console.error("Error processing images:", error.message);
    res.status(500).json({ error: "Error processing images" });
  }
};
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = { uploadFields, processImages };
