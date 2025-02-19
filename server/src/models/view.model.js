// ✅ models/view.model.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require("mongoose");

// ✅ Define View schema
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const Schema = mongoose.Schema;

// ✅ Define View schema
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const ViewSchema = new Schema({
  ip: { type: String, required: true },
  userAgent: { type: String },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  createdAt: { type: Date, default: Date.now, expires: "30d" }, // ✅ Auto-delete after 30 days
});

// ✅ Allow an IP to be recorded once per day
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
ViewSchema.index({ ip: 1, createdAt: 1 }, { unique: true });

// ✅ Create View model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const View = mongoose.model("View", ViewSchema);

// ✅ Export View model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = View;
