const { User } = require("../models/user.model");
require("dotenv").config({ path: ".env" });
const jwt = require('jsonwebtoken'); // Import the jwt library
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { getCookieValueByName } = require("../utils/getCookieValueByName");
const { cloudinary } = require("../configs/cloudinary");

// Function to update user profile and handle image upload
// //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
async function updateProfile(req, res) {
    try {
        const { id } = req.params;
        const userId = id.replace(":", "");
        // console.log(req.body)
        const userFound = await User.findById(userId);
        if (!userFound) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        const { email, lastName, firstName, password, newPassword } = req.body;
        const updatedUserFields = {}; // Object to store updated fields
        // Update full name if provided
        if (firstName || lastName) {
            updatedUserFields.name = `${firstName || userFound.firstName} ${lastName || userFound.lastName}`;
        }
        // Update email if provided
        if (email) {
            updatedUserFields.email = email;
        }
        // Update password if `newPassword` and `password` are provided
        if (newPassword && password) {
            const matchPassword = await User.comparePassword(password, userFound.password);
            if (!matchPassword) {
                return res.status(401).json({ success: false, message: "Invalid current password" });
            }
            updatedUserFields.password = await User.encryptPassword(newPassword);
        }
        // Handle optional image upload
        const images = req.processedImages || [];
        if (images.length > 0) {
            const imageFile = images[0];
            const result = await cloudinary.uploader.upload(imageFile, {
                folder: "usersProfile/images",
                resource_type: "image",
            });
            updatedUserFields.profilePicture = result.secure_url;
            updatedUserFields.img_id = result.public_id;
            fs.unlinkSync(imageFile); // Delete local file after upload
        }

        // Only update fields that were provided
        const updatedUser = await User.findByIdAndUpdate(
            userFound.id,
            { $set: updatedUserFields },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            user: updatedUser,
            message: "User updated successfully",
        });
    } catch (error) {
        console.error("Update Profile Error:", error);
        return res.status(500).json({ success: false, message: "Server-side error" });
    }

}

// Get user session information
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
async function getSession(req, res) {
    try {
        const cookieToken = getCookieValueByName(req.cookies, process.env.SESSION_TOKEN);

        if (!cookieToken)
            return res
                .status(404)
                .json({ successful: false, message: "No session token was found" });

        // Check if the session token is valid
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        const decoded = jwt.verify(cookieToken, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.id, { password: 0 }).populate(
            "roles"
        );

        if (!user) return res.status(404).json({ message: "No user found" });

        // Respond with user information and token
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res.status(200).json({ successful: true, user, token: cookieToken });
    } catch (error) {
        console.log(error);

        // Respond with an error message
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res.status(401).json({
            successful: false,
            message: "Unauthorized: Invalid or expired credentials"
        });
    }
};

// User login function
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
async function login(req, res) {
    try {

        const userFound = await User.findOne({ email: req.body.email }).populate(
            "roles"
        );

        if (!userFound) return res.status(404).json({
            successful: false,
            message: "Invalid credentials"
        });

        // Check if the provided password matches the stored password
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        const matchPassword = await User.comparePassword(
            req.body.password,
            userFound.password
        );

        if (!matchPassword)
            return res.status(401).json({
                token: null,
                message: "Invalid Password",
            });

        const oneDayInSeconds = 86400;

        // Generate a JWT token for the user's session
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: oneDayInSeconds,
        });

        // Set the token as a cookie
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        res.cookie(process.env.SESSION_TOKEN, token, {
            httpOnly: true,  // Prevents client-side access
            secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
            sameSite: 'Strict', // Prevent CSRF attacks
            maxAge: oneDayInSeconds * 1000, // Expiry time in milliseconds
        });

        // Respond with user information, roles, and token
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res
            .status(200)
            .json({ token: token, roles: userFound.roles, user: userFound });
    } catch (error) {
        console.log(error);

        // Respond with an error message
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res.status(500).json({ message: error });
    }
};

// User logout function
async function logout(req, res) {
    try {
        // Clear the session token cookie
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        res.clearCookie(process.env.SESSION_TOKEN);
        // Respond with a success 
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res
            .status(200)
            .json({ successfully: true, message: "User has logged out successfully" });
    } catch (error) {
        console.log(error);
        // Respond with an error message
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        return res.status(500).json({ message: error });
    }
};

module.exports = {
    updateProfile,
    login,//com
    getSession,//psnding
    logout,//com
};