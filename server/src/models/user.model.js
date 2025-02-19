// ✅ Import required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require("mongoose");

// ✅ Import bcrypt for password encryption
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const bcrypt = require("bcryptjs");

// ✅ Define User schema and model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const Schema = mongoose.Schema;

// ✅ Hash the password before saving it to the database
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    password: {
      type: String,
      required: true,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    email: {
      type: String,
      required: true,
      trim: true,
      index: 1,
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    img_id: {
      type: String,
      default: null,
    },
  },
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  {
    timestamps: true,
    versionKey: false,
  }
);

// ✅ Static methods
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
userSchema.statics.encryptPassword = async (password) => {
  if (!password) {
    throw new Error("Password is undefined or invalid.");
  }
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};


// ✅ Hash the password if provided in the request body while creating a new user
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
// ✅ Create the User model using the defined schema
const User = mongoose.model("User", userSchema);

module.exports = { User };
