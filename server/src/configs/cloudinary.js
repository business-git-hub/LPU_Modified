// Import the Cloudinary library
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const cloudinary = require("cloudinary");

// Function to configure Cloudinary
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const configureCloudinary = () => {
    try {
        // Configure Cloudinary with your credentials from environment variables
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
        });
        console.log("Cloudinary configuration successful.");
    } catch (error) {
        console.error("Cloudinary configuration error:", error);
        // Handle the error as needed (e.g., exit the application)
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        process.exit(1);
    }
};

// Call the function to configure Cloudinary
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
configureCloudinary();

// Export the configured Cloudinary instance
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = { cloudinary };