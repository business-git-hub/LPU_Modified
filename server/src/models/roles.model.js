// ✅ models/roles.model.js
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const mongoose = require('mongoose')

// ✅ Define Role schema and model
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const Schema = mongoose.Schema

// ✅ Define and export Role model with ROLES constant
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const ROLES = ["admin"];

// ✅ Create Role schema and model with Mongoose
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const roleSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// ✅ Export Role model and ROLES constant
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const Role = mongoose.model('Role', roleSchema);

// ✅ Export Role model and ROLES constant as named exports (ES6 module syntax)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = {
    Role,
    ROLES
}