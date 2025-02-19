// ✅ Import required modules
const express = require("express");

// ✅ Create a new express app
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const router = express.Router();

// ✅ Import controllers and middleware for university management
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const universityController = require("../controllers/university.controller");

// ✅ Import Multer middleware for handling file uploads for university media
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { uploadFields, processImages } = require("../configs/multerConfig");


// ✅ Apply authentication middleware to these routes to ensure only authenticated users can update their profiles
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { verifyToken } = require("../middlewares/authJwt");

// ✅ Create a new university with Multer middleware
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.post("/", [verifyToken, uploadFields, processImages], universityController.createUniversity);

// ✅ Get a university by ID
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/:id", universityController.getUniversityById);

// ✅ Get all universities with pagination
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/", universityController.getAllUniversities);

// ✅ Update a university by ID (including media handling)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.put("/:id", [verifyToken, uploadFields, processImages], universityController.updateUniversity);

// ✅ Delete a university by ID (including media removal from Cloudinary)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.delete("/:id", [verifyToken], universityController.deleteUniversity);

// ✅ Export the router for university management
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = router;
