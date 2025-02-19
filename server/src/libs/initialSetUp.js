// ✅ libs/initialSetUp.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const bcrypt = require("bcryptjs");

// ✅ libs/sendConfirmationEmail.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const jwt = require("jsonwebtoken");

// ✅ models/user.model.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
require("dotenv").config({ path: ".env" });

// ✅ models/roles.model.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { User } = require("../models/user.model");

// ✅ models/temporalUser.model.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { Role } = require("../models/roles.model");

// ✅ controllers/auth.controller.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount({ timeout: 30000 }); // Increase the timeout to 30 seconds
    if (count > 0) return;

    const rolesToCreate = ["admin"].map(
      (name) => ({ name })
    );
    const createdRoles = await Role.create(rolesToCreate);

    // console.log("Roles Created!");
  } catch (err) {
    console.error("Error creating roles:", err);
  }
};

// ✅ controllers/auth.controller.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createUserIfNotExists = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (user) {
      // console.log(`User with email ${userData.email} already exists. Skipping creation.`);
      return; // Exit if the user already exists
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // Find roles or create if they don't exist
    let roles = await Role.find({ name: userData.roles });
    if (roles.length === 0) {
      const newRole = await Role.create({ name: userData.roles });
      roles = [newRole]; // Add the newly created role
      // console.log(`Role ${userData.roles} created.`);
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // Create the user
    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
      roles: roles.map((role) => role.id),
    });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // console.log(`User ${newUser.name} created with role(s): ${userData.roles}`);
  } catch (err) {
    console.error(`Error creating user ${userData.name}:`, err.message);
  }
};


//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createAdmin = async () => {
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  try {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const adminData = {
      name: "admin",
      email: "admin@localhost.com",
      roles: "admin",
      password: "admin123", // Change this to a secure password.
    };
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await createUserIfNotExists(adminData);
  } catch (err) {
    console.error("Error creating admin user:", err);
  }
};


// ✅ Create all users
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createTop10universitiesindia = async () => {
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  try {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const adminData = {
      name: "top10universitiesindia",
      email: "top10universitiesindia@gmail.com",
      roles: "admin",
      password: "TOPUNI@123", // Change this to a secure password.
    };
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await createUserIfNotExists(adminData);
  } catch (err) {
    console.error("Error creating admin user:", err);
  }
};
// ✅ Create all users
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createAllUsers = async () => {
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  await createAdmin();
  await createTop10universitiesindia();
};


// ✅ libs/initialSetUp.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = {
  createRoles,
  createAllUsers,
};
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735