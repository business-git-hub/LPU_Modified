// ✅ Function to get the value of a cookie by name
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
function getCookieValueByName(cookies, name) {
    // ✅ Check if the name exists in cookies (use "in" keyword)
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    if (!(name in cookies)) return null;

    // ✅ Return the value associated with the name
    //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
    return cookies[name];
}

// ✅ Export the getCookieValueByName function
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = { getCookieValueByName };