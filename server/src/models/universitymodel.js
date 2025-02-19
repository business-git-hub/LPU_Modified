// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require("mongoose");

// ✅ University Schema for University
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const UniversitySchema = new mongoose.Schema(
  {
    identity: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      nativeName: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      acronym: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      founded: {
        type: Number,
        required: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      colors: {
        type: [String],
        default: [],
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    location: {
      address: {
        type: String,
        required: true,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      city: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      state: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      postalCode: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      country: {
        type: String,
        required: true,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      phone: {
        type: String,
        match: /^\+?\d{10,15}$/, // ✅ Simple international phone validation
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      fax: {
        type: String,
        match: /^\+?\d{10,15}$/, // ✅ Simple fax validation
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      website: {
        type: String,
        required: true,
        trim: true,
        match: /^https?:\/\/.+\..+/, // ✅ Basic URL validation
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      email: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // ✅ Basic email validation
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    sizeAndProfile: {
      studentEnrollment: {
        min: { type: Number },
        max: { type: Number },
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      academicStaff: {
        min: { type: Number },
        max: { type: Number },
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      controlType: {
        type: String,
        enum: ["Public", "Private", "Deemed"],
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      entityType: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      academicCalendar: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      campusSetting: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      religiousAffiliation: {
        type: String,
        default: "None",
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    admissions: {
      gender: {
        type: String,
        enum: ["Men", "Women", "Coed"], // ✅ Gender options
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      internationalStudents: {
        type: Boolean,
        default: false,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      selectionType: {
        type: String,
        trim: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      admissionRate: {
        min: { type: Number },
        max: { type: Number },
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    tuitionFees: {
      undergraduate: {
        local: {
          min: { type: Number },
          max: { type: Number },
        },
        international: {
          min: { type: Number },
          max: { type: Number },
        },
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      postgraduate: {
        local: {
          min: { type: Number },
          max: { type: Number },
        },
        //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        international: {
          min: { type: Number },
          max: { type: Number },
        },
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    accreditations: {
      institutional: {
        type: String,
        required: true,
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      specialized: {
        type: [String], // ✅ Array of programmatic accreditations
        default: [],
      },
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      firstAccreditationYear: {
        type: Number,
      },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    facilitiesAndServices: {
      library: { type: Boolean, default: false },
      housing: { type: Boolean, default: false },
      sportFacilities: { type: Boolean, default: false },
      financialAids: { type: Boolean, default: false },
      studyAbroad: { type: Boolean, default: false },
      distanceLearning: { type: Boolean, default: false },
      academicCounseling: { type: Boolean, default: false },
      careerServices: { type: Boolean, default: false },
      institutionalHospital: { type: Boolean, default: false },
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    media: {
      images: [
        {
          url: {
            type: String,
            match: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/, // ✅ Image URL validation
          },
          //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
          publicId: {
            type: String, // ✅ For cloud storage references
            trim: true,
          },
          //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
        },
      ],
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    description: {
      type: String,
      required: true,
      trim: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  },
  {
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    timestamps: true, // ✅ Automatically adds createdAt and updatedAt fields
  }
);

// ✅ Add more fields as needed for more comprehensive data model.
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = mongoose.model("University", UniversitySchema);
