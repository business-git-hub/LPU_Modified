// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const express = require("express");

// ✅ Create a new Express router
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const router = express.Router();

// ✅ Import required controllers
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const viewController = require("../controllers/view.controller");

// ✅ Apply authentication middleware to these routes to ensure only authenticated users can update their profiles
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { verifyToken } = require("../middlewares/authJwt");

// ✅ Route to track visit
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/trackvisit", viewController.trackVisit);

// ✅ Route to get monthly views
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/monthlyviews", viewController.getMonthlyViews);

// ✅ Route to get all visitor IPs
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/visitorips", viewController.getVisitorIPs);

// ✅ Exports the router
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = router;
