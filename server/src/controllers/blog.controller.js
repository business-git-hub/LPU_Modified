const UniversityBlog = require("../models/universityBlog.model");
const { cloudinary } = require("../configs/cloudinary");
const mongoose = require("mongoose");
const fs = require("fs");

// Create Blog Post
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const createBlogPost = async (req, res) => {
  try {
    const {
      title,
      category,
      content,
      author,
      university,
      metaDescription,
      metaKeywords,
    } = req.body;
    // Validate `university` field
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    let universityId = null;
    if (university && mongoose.Types.ObjectId.isValid(university)) {
      universityId = new mongoose.Types.ObjectId(university);
    } else if (!university) {
      universityId = null; // If `university` is empty, set it to null
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid university ID format.",
      });
    }
    const images = req.processedImages || [];
    // Handling image upload via Cloudinary
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    let imageUrl = "";
    let imagePublicId = "";

    if (images && images && images.length > 0) {
      const imageFile = images[0];

      // Upload to Cloudinary
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      const result = await cloudinary.uploader.upload(imageFile, {
        folder: "UniversityBlog/images",
        resource_type: "image",
      });

      imageUrl = result.secure_url;
      imagePublicId = result.public_id;

      // Delete file from local storage
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      fs.unlinkSync(imageFile);
    } else {
      return res.status(400).json({
        success: false,
        message: "Image file is required.",
      });
    }

    // Create the new blog post
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const newBlogPost = new UniversityBlog({
      title,
      category,
      content,
      author,
      university: universityId, // Use validated ObjectId or null
      metaDescription,
      metaKeywords,
      img: imageUrl,
      img_id: imagePublicId,
      isPublished: false,
    });

    await newBlogPost.save();
    const blogs = await UniversityBlog.find().sort({ createdAt: -1 });

    return res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      data: newBlogPost,
      allBlog: blogs,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Could not create blog post.",
    });
  }
};

// Update Blog Post
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const updateBlogPost = async (req, res) => {
  try {
    const {
      title,
      category,
      content,
      author,
      university,
      metaDescription,
      metaKeywords,
      isPublished,
    } = req.body;

    const { id } = req.params;
    const sanitizedId = id.replace(":", "");
    const blogPost = await UniversityBlog.findById(sanitizedId)
      .populate("university")
      .exec();

    if (!blogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    const images = req.processedImages || [];
    // Handling image upload via Cloudinary if a new image is uploaded
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (images && images.length > 0) {
      const imageFile = images[0]; // Get the first image if multiple are uploaded

      // Delete the previous image from Cloudinary if it exists
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      if (blogPost.img_id) {
        await cloudinary.uploader.destroy(blogPost.img_id);
      }

      // Upload the new image to Cloudinary
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      const result = await cloudinary.uploader.upload(imageFile, {
        folder: "UniversityBlog/images", // Cloudinary folder for the images
        resource_type: "image", // Upload image
      });

      // Set the new image URL and public ID
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      blogPost.img = result.secure_url;
      blogPost.img_id = result.public_id;

      // Optionally, delete the file from local storage after upload
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      fs.unlinkSync(imageFile);
    }

    // Update other fields, only if the new value exists
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    blogPost.title = title || blogPost.title;
    blogPost.category = category || blogPost.category;
    blogPost.content = content || blogPost.content;
    blogPost.author = author || blogPost.author;
    blogPost.university = university || blogPost.university;
    blogPost.metaDescription = metaDescription || blogPost.metaDescription;
    blogPost.metaKeywords = metaKeywords || blogPost.metaKeywords;
    blogPost.isPublished =
      isPublished !== undefined ? isPublished : blogPost.isPublished;

    // Save the updated blog post
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await blogPost.save();
    const blogs = await UniversityBlog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Blog post updated successfully",
      data: blogPost,
      allBlog: blogs,
    });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  } catch (error) {
    console.error("Error updating blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Could not update blog post.",
    });
  }
};

// Delete Blog Post
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const sanitizedId = id.replace(":", "");
    const blogPost = await UniversityBlog.findById(sanitizedId)
      .populate("university")
      .exec();

    if (!blogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }

    // Delete the image from Cloudinary if it exists
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (blogPost.img_id) {
      await cloudinary.uploader.destroy(blogPost.img_id);
    }

    // Delete the blog post from the database
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    await UniversityBlog.deleteOne({ _id: sanitizedId }); // Use deleteOne() instead of remove()
    const blogs = await UniversityBlog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Blog post deleted successfully",
      allBlog: blogs,
    });
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Could not delete blog post.",
    });
  }
};

// Get All Blog Posts
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const getAllBlogPosts = async (req, res) => {
  try {
    // Set default values for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { category, search } = req.query;

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

    // Add category filter if provided
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (category) {
      query.category = category;
    }

    // Add search functionality
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { metaKeywords: { $regex: search, $options: "i" } },
      ];
    }

    // Calculate skip value for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const skip = (page - 1) * limit;

    // Get paginated blog posts
    const blogPosts = await UniversityBlog.find(query)
      .populate("university")
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit)
      .select("-__v"); // Exclude version key
    // Fetch all unique categories
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const categories = await UniversityBlog.distinct("category");
    // Get total count for pagination
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    const totalPosts = await UniversityBlog.countDocuments(query);
    const totalPages = Math.ceil(totalPosts / limit);
    const blogs = await UniversityBlog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: {
        posts: blogPosts,
        allBlog: blogs,
        categories,
        pagination: {
          currentPage: page,
          totalPages,
          totalPosts,
          limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return res.status(500).json({
      success: false,
      error: "Error fetching blog posts",
      details: error.message,
    });
  }
};

// Get Single Blog Post
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const sanitizedId = id.replace(":", "");
    const blogPost = await UniversityBlog.findById(sanitizedId)
      .populate("university")
      .exec();

    if (!blogPost) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    // Increment the view count by 1
    const blogs = await UniversityBlog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: blogPost,
      allBlog: blogs,
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Could not fetch blog post.",
    });
  }
};

module.exports = {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
