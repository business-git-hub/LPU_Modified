// ✅ Import the required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const jwt = require("jsonwebtoken");

// ✅ Import the User model for checking if the user exists and has the required role
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { User } = require("../models/user.model");

// ✅ Middleware to verify the user's token
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
async function verifyToken(req, res, next) {
    try {
        let token;
        // ✅ Check if the request has an Authorization header with a Bearer token
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1]; // Corrected the token extraction
        }
        if (!token) return res.status(401).json({ message: "No token provided" });
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "Expire token No user found" });
        next(); // ✅ Proceed to the next middleware
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

// ✅ Middleware to check if the user has a "moderator" role
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = { verifyToken };
