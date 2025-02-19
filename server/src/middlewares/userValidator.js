// ✅ Import the required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const validator = require("validator");

// ✅ Create a middleware function to validate user inputs before creating or updating a user
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const checkIsValidUser = (req, res, next) => {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!req.body) {
        return res.status(400).json({ error: "Invalid request, no data provided" });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const { lastName, email, firstName, password } = req.body;
    if (!email || !lastName || !firstName || !password) {
        return res.status(400).json({
            successful: false,
            message: `Missing inputs, firstName: ${firstName} lastName: ${lastName} email:${email} password:${password}`,
        });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!validator.isEmail(email)) {
        return res.status(400).json({ successful: false, message: 'Email is not valid' });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!lastName || !firstName || typeof lastName !== 'string' || typeof firstName !== 'string') {
        return res.status(400).json({ successful: false, message: 'Full name is required and should be valid' });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (password.length < 5) {
        return res.status(400).json({ successful: false, message: `Password min length is 5` });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    req.userName = `${firstName} ${lastName}`;
    next();
};

// ✅ Create a middleware function to validate user inputs before updating a user
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const checkIsValidUpdate = (req, res, next) => {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!req.body) {
        return res.status(400).json({ error: "Invalid request, no data provided" });
    }
    const { email, lastName, firstName, newPassword } = req.body;
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (newPassword && newPassword.length < 5) {
        return res.status(400).json({ successful: false, message: 'Password min length is 5' });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!validator.isEmail(email)) {
        return res.status(400).json({ successful: false, message: 'Email is not valid' });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!lastName || !firstName || typeof lastName !== 'string' || typeof firstName !== 'string') {
        return res.status(400).json({ successful: false, message: 'Full name is required and should be valid' });
    }
    next();
};


// ✅ Export the middleware functions
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = { checkIsValidUser, checkIsValidUpdate };
