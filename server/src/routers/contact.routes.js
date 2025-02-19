
// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const express = require("express");

// ✅ Import contact controller methods
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { createContact, getAllContacts, updateContactStatus, deleteContact, } = require("../controllers/contact.controller");

// ✅ Create a new Express router instance and define routes for contact management operations.
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const router = express.Router();

// ✅ Route to create a new contact message
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.post("/", createContact);

// ✅ Route to get all contact messages with pagination and filtering
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.get("/", getAllContacts);

// ✅ Route to update contact status
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.patch("/:id/status", updateContactStatus);

// ✅ Route to delete a contact message by ID
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
router.delete("/:id", deleteContact);


// ✅ Exports the contact router instance.
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = router;
