// ✅ get,post,delete just 
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require("mongoose");

// ✅ fields- first name,lastname,email,phonenumber, qualification, message, status, createdAt, updatedAt
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  qualification: {
    type: String,
    required: true,
    trim: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  message: {
    type: String,
    required: true,
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  status: {
    type: String,
    required: true,
    enum: ["new", "in-progress", "completed", "archived"],
    default: "new",
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ index for faster searching
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const Contact = mongoose.model("Contact", contactSchema);

// ✅ export the model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = Contact;
