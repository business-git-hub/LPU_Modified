// ✅ Load environment variables from .env file
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
require("dotenv").config({ path: ".env" });

// ✅ Import required modules
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const app = require("./src/app");
const connectToDatabase = require("./src/configs/db");


// ✅ Import node-cron and schedule a task:
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
var cron = require("node-cron");

// ✅ Create an HTTP server using the app
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const http = require("http").createServer(app);

// ✅ Import functions for initial setup
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const { createRoles, createAllUsers } = require("./src/libs/initialSetUp");

// ✅ Connect to the database
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
connectToDatabase();

// ✅ Perform initial setup tasks
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
createRoles();
createAllUsers();

//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
// ✅ Schedules given task to be executed whenever the cron expression ticks.
cron.schedule("* * * * *", () => {
  console.log("dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735");
});

// ✅ Define the host for the server to listen on
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const HOST = process.env.HOST || "0.0.0.0";

// ✅ Define the port for the server to listen on
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
const PORT = process.env.PORT || 5000;

// ✅ Start the server and listen on the defined port
// dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
http.listen(PORT, HOST, () => {
  console.log(`dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 Server is  listening on port http://${HOST}:${PORT}`);
});
