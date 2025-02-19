const University = require("../models/universitymodel");
const { cloudinary } = require("../configs/cloudinary");

const fs = require("fs");

// CREATE a new university
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.createUniversity = async (req, res) => {
  try {
    const { description, ...rest } = req.body;
    const uploadedImages = [];
    const images = req.processedImages || [];

    // Upload images to Cloudinary
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (images) {
      for (const file of images) {
        const uploadResult = await cloudinary.uploader.upload(file, {
          folder: "universities/images", // Folder for images
          resource_type: "image",
        });
        uploadedImages.push({
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        });
        fs.unlinkSync(file); // Remove file after upload
      }
    }
    // Create the new university
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const university = new University({
      ...rest,
      media: { images: uploadedImages },
      description: description.trim(),
    });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const allUniversity = await University.find().sort({ createdAt: -1 });
    await university.save();
    res
      .status(201)
      .json({ success: true, data: university, allUniversity: allUniversity });
  } catch (error) {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    console.error("Error creating university:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

// READ a university by ID
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.getUniversityById = async (req, res) => {
  try {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const { id } = req.params;
    const sanitizedId = id.replace(":", "");
    const university = await University.findById(sanitizedId);
    if (!university) {
      return res
        .status(404)
        .json({ success: false, error: "University not found" });
    }
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const allUniversity = await University.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, data: university, allUniversity: allUniversity });
  } catch (error) {
    console.error("Error fetching university:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// READ all universities with pagination
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.getAllUniversities = async (req, res) => {
  try {
    // Set default values for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { search } = req.query;

    // Validate page and limit
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (page < 1) {
      return res.status(400).json({
        success: false,
        error: "Page must be greater than 0",
      });
    }

    if (limit < 1 || limit > 100) {
      return res.status(400).json({
        success: false,
        error: "Limit must be between 1 and 100",
      });
    }

    const query = {};

    // Add search functionality
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (search) {
      query.$or = [
        { "identity.name": { $regex: search, $options: "i" } },
        { "location.city": { $regex: search, $options: "i" } },
        { "location.country": { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Get paginated universities
    const universities = await University.find(query)
      .sort({ "identity.name": 1 }) // Sort by university name
      .skip(skip)
      .limit(limit)
      .select("-__v"); // Exclude version key

    // Get total count for pagination
    const totalUniversities = await University.countDocuments(query);
    const totalPages = Math.ceil(totalUniversities / limit);
    const allUniversity = await University.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: {
        universities,
        allUniversity,
        pagination: {
          currentPage: page,
          totalPages,
          totalUniversities,
          limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching universities:", error.message);
    res.status(500).json({
      success: false,
      error: "Error fetching universities",
      details: error.message,
    });
  }
};

// UPDATE a university by ID (including media updates)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.updateUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const sanitizedId = id.replace(":", "");

    const { description, removeImagePublicIds, ...rest } = req.body;
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    // Get images and videos from multer request (files are in req.files)
    const images = req.processedImages || [];

    // Fetch the university
    const university = await University.findById(sanitizedId);
    if (!university) {
      return res
        .status(404)
        .json({ success: false, error: "University not found" });
    }
    if (images.length > 0) {
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      // If new images are provided, remove all existing images and upload new ones
      // Remove all existing images from Cloudinary
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      for (const image of university.media.images) {
        await cloudinary.uploader.destroy(image.publicId, {
          resource_type: "image",
        });
      }
      // Clear the images array from the university
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      university.media.images = [];

      // Upload new images
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      if (images.length > 0) {
        for (const image of images) {
          const uploadResult = await cloudinary.uploader.upload(image, {
            folder: "universities/images",
            resource_type: "image",
          });
          university.media.images.push({
            url: uploadResult.secure_url,
            publicId: uploadResult.public_id,
          });
          fs.unlinkSync(image);
        }
      }
      // Delete file from local storage
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    }
    // Update the description and other fields
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    university.description = description
      ? description.trim()
      : university.description;
    Object.assign(university, rest);

    // Save the updated university
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await university.save();
    const allUniversity = await University.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, data: university, allUniversity: allUniversity });
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  } catch (error) {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    console.error("Error updating university:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

// DELETE a university and its media from Cloudinary
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
exports.deleteUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const sanitizedId = id.replace(":", "").trim();

    // Fetch the university
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const university = await University.findById(sanitizedId).exec();
    if (!university) {
      return res.status(404).json({
        success: false,
        error: "University not found",
      });
    }

    // Remove all images from Cloudinary concurrently
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (university.media?.images?.length) {
      await Promise.all(
        university.media.images.map((image) =>
          cloudinary.uploader.destroy(image.publicId, {
            resource_type: "image",
          })
        )
      );
    }

    // Delete the university
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await University.deleteOne({ _id: sanitizedId });

    // Fetch updated list of universities
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const allUniversities = await University.find()
      .sort({ createdAt: -1 })
      .exec();
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    return res.status(200).json({
      success: true,
      message: "University deleted successfully",
      universities: allUniversities,
    });
  } catch (error) {
    console.error("Error deleting university:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
