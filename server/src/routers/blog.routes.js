// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const express = require("express");

// ✅ Import routes for University Blog CRUD operations
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const router = express.Router();

// ✅ Import middleware for file uploads
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { uploadFields, processImages } = require("../configs/multerConfig");

// ✅ Apply authentication middleware to these routes to ensure only authenticated users can update their profiles
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { verifyToken } = require("../middlewares/authJwt");

// ✅ Import controllers for University Blog CRUD operations
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { createBlogPost, updateBlogPost, deleteBlogPost, getAllBlogPosts, getBlogPostById, } = require("../controllers/blog.controller");

// ✅ Routes for University Blog CRUD Operations
// ✅ Create a new blog post with Multer middleware to handle file uploads
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.post("/", [verifyToken, uploadFields, processImages], createBlogPost);

// ✅ Update a blog post with Multer middleware to handle file uploads
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.put("/:id", [verifyToken, uploadFields, processImages], updateBlogPost);

// ✅ Delete a blog post by ID
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.delete("/:id", [verifyToken], deleteBlogPost);

// ✅ Retrieve all blog posts with pagination
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/", getAllBlogPosts);

// ✅ Retrieve a single blog post by ID with ID parameter
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/:id", getBlogPostById);

// ✅ Export the router for use in other files
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = router;
