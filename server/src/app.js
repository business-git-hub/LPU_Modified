
// ✅ Importing required modules
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const express = require("express");

// ✅ Create a new Express application instance
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const app = express();

// ✅ Middleware for handling CORS (Cross-Origin Resource Sharing)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const cors = require("cors");


// ✅ Importing path module for handling file paths
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const path = require("path");


// ✅ Middleware for handling HTTP request logging using Morgan
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const morgan = require("morgan");


// ✅ Middleware for parsing cookies using Cookie-Parser module
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const cookieParser = require("cookie-parser");


// ✅ Middleware for parsing JSON Web Tokens (JWT)
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
require("dotenv").config({ path: ".env" });

// ✅ Importing and using various routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const authRouter = require("./routers/auth.routes.js");

// ✅ Importing and using various routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const blogRouter = require("./routers/blog.routes.js");

// ✅ Importing and using various 
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const contactRouter = require("./routers/contact.routes.js");

// ✅ Importing and using various routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const universityRoutes = require("./routers/university.routes.js");

// ✅ Importing and using various routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const viewRoutes = require("./routers/view.routes.js");
// ✅ Enable CORS for all origins in development mode
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
// ✅ Configure CORS middleware to allow access from all 
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735

const isDevelopment = process.env.NODE_ENV !== "production";

// ✅ Define allowed origins
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const allowedOrigins = isDevelopment
  ? ["http://localhost:5173", "http://localhost:3000"]
  : process.env.ACCESS_CONTROL_ALLOW_ORIGIN
    ? process.env.ACCESS_CONTROL_ALLOW_ORIGIN.split(",")
    : [];
// ✅ Proper CORS options
// ✅Configure CORS 
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Cookie", "Authorization"],
  credentials: true, // ✅ Allows cookies to be sent
};

//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735

// ✅ Apply CORS middleware
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use(cors(corsOptions));

// ✅ Middleware for parsing URL-encoded and JSON request bodies
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Middleware for parsing cookies
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use(cookieParser());

// ✅ HTTP request logger middleware (Morgan) with "tiny" format
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use(morgan("tiny"));

// ✅ Serve static files from the "media" directory
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/media", express.static(path.join(__dirname, "storage", "upload")));

// ✅ Use Stats Routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/api/view", viewRoutes);

// ✅ Define routes with tags
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/api/auth", authRouter);


//  Use the blog routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/api/blogs", blogRouter);

// ✅ Use the contact 
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/api/contacts", contactRouter);

// ✅ Use the university routes
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
app.use("/api/universities", universityRoutes);


// ✅ Serve frontend in production mode
if (isDevelopment) {
  console.log("Running in development mode...");
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
} else {
  console.log("Serving frontend in production mode...");
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  app.use(
    express.static(path.resolve(__dirname, "..", "..", "client", "dist"), {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
          res.setHeader("Content-Type", "application/javascript");
        }
      },
    })
  );
  //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  // ✅ Serve index.html for all unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "client", "dist", "index.html"));
  });
}

// ✅ Export the Express application instance
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
module.exports = app;
