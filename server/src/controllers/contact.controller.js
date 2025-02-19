const Contact = require("../models/contact.model");

// Create a new contact message
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message, qualification } = req.body;

    // Basic validation
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    // Email format validation
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Phone number validation
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10 to 15 digits
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ error: "Invalid phone number format" });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      qualification,
    });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await contact.save();
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    res.status(500).json({ error: err.message });
  }
};


// Get all contact messages with pagination and filtering
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const getAllContacts = async (req, res) => {
  try {
    // Set default values for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { status, search } = req.query;

    // Validate page and limit
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (page < 1) {
      return res.status(400).json({ error: "Page must be greater than 0" });
    }

    if (limit < 1 || limit > 100) {
      return res.status(400).json({ error: "Limit must be between 1 and 100" });
    }

    const query = {};

    // Add status filter if provided
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (status) {
      const validStatuses = ["new", "in-progress", "completed", "archived"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status provided" });
      }
      query.status = status;
    }

    // Add search functionality
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    // Calculate skip value for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const skip = (page - 1) * limit;

    // Get paginated contacts
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit)
      .select("-__v"); // Exclude version key

    // Get total count for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const totalContacts = await Contact.countDocuments(query);
    const totalPages = Math.ceil(totalContacts / limit);

    // Return paginated response
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    res.status(200).json({
      success: true,
      data: {
        contacts,
        pagination: {
          currentPage: page,
          totalPages,
          totalContacts,
          limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Error fetching contacts",
      details: err.message,
    });
  }
};

// Update contact status
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["new", "in-progress", "completed", "archived"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        error:
          "Invalid status. Must be one of: new, in-progress, completed, archived",
      });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        status,
        $push: {
          statusHistory: {
            status,
            timestamp: new Date(),
          },
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: "Contact message not found" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      contact: updatedContact,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact message by ID
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findById(id);

    if (!deletedContact) {
      return res.status(404).json({ error: "Contact message not found" });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // Only allow deletion of archived contacts
    if (deletedContact.status !== "archived") {
      return res.status(400).json({
        error: "Only archived contacts can be deleted",
      });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await deletedContact.deleteOne({ _id: id });
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  updateContactStatus,
  deleteContact,
};
