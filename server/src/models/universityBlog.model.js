// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require("mongoose");

// ✅ Blog Schema for University
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const UniversityBlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    subtitle: {
      type: String,
      trim: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    category: {
      type: String,
      required: true,
      trim: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    img: {
      type: String,
      required: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    img_id: {
      type: String,
      default: null,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    // ✅ University Reference (linking to the University model)
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University", // ✅ Reference to the University model
    },
    // ✅ Metadata for SEO optimization
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160, // ✅ SEO-friendly description limit
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    metaKeywords: {
      type: [String], // ✅ List of keywords for SEO
      default: [],
    },
    // ✅ Track blog post views and likes
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    // ✅ Option for blog visibility
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    isPublished: {
      type: Boolean,
      default: false, // ✅ Can be set to true when the blog is ready to be shown
    },
    // ✅ Date when the blog will be published (optional future posts)
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    publishDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // ✅ Automatically manages createdAt and updatedAt fields
  }
);

// ✅ Export the UniversityBlog model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = mongoose.model("UniversityBlog", UniversityBlogSchema);
