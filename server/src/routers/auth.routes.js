// ✅ auth.routes.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const router = require("express").Router();
const fs = require("fs");
// ✅ Importing controllers for user authentication
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { login, updateProfile, logout, getSession } = require("../controllers/auth.controller");
// ✅ Apply authentication middleware to these routes to ensure only authenticated users can update their profiles
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { verifyToken } = require("../middlewares/authJwt");

// ✅ Import required middleware and controllers
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { uploadFields, processImages } = require("../configs/multerConfig");



// ✅ Apply validation middleware to ensure the updated user data is valid before updating the profile
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { checkIsValidUpdate } = require("../middlewares/userValidator");

// ✅ Define the route to update a user's profile
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.put("/:id", [verifyToken, uploadFields, processImages], updateProfile);

// ✅ Routes for user authentication
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.post("/login", login); // Login route

// ✅ Route to get session information
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/session", getSession); // Get session information route

// ✅ Route to logout user
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/logout", logout); // Logout route

// ✅ Exports the router for user authentication
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = router;
