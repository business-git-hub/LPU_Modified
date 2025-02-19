const View = require("../models/view.model");

// ✅ Track Website Visit (Save IP & User-Agent)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.trackVisit = async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of the day
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const updatedView = await View.findOneAndUpdate(
      { ip, createdAt: { $gte: today } }, // Check if IP already exists today
      { $set: { userAgent, createdAt: new Date() } }, // Update userAgent & timestamp
      { upsert: true, new: true }
    );
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    res.json({ message: "Visit recorded", ip, userAgent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Monthly Views
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.getMonthlyViews = async (req, res) => {
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  try {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const totalViews = await View.aggregate([
      {
        $match: { createdAt: { $gte: new Date(new Date().setDate(1)) } }, // First day of the month
      },
      { $count: "totalViews" }, // Count total visits
    ]);
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    res.json({ monthlyViews: totalViews[0]?.totalViews || 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Visitor IPs
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.getVisitorIPs = async (req, res) => {
  try {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const ips = await View.find().select("ip userAgent createdAt -_id");
    res.json({ visitorIPs: ips });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
