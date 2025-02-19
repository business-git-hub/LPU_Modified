const mongoose = require("mongoose");
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
async function connectToDatabase() {
  const connectionString = process.env.MONGODB_URI;
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  const options = {
    serverSelectionTimeoutMS: 5000, // Time to wait for server selection
    socketTimeoutMS: 30000, // Socket timeout
    connectTimeoutMS: 30000, // Connection timeout
    maxPoolSize: 10, // Connection pool size
  };
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  let retryCount = 0;
  const maxRetries = 5;
  const retryInterval = 5000; // Retry interval in milliseconds
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
  while (retryCount < maxRetries) {
    try {
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      const conn = await mongoose.connect(connectionString, options);
      console.log(`Connected to MongoDB! Host: ${conn.connection.host}`);
      break; // Exit loop on successful connection
    } catch (error) {
      console.error(
        `Connection to MongoDB failed (attempt ${
          retryCount + 1
        }/${maxRetries}):`,
        error.message
      );
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      retryCount++;
      if (retryCount === maxRetries) {
        console.error("Max retries reached. Exiting application.");
        process.exit(1); // Exit the process if retries fail
      }

      console.log(`Retrying connection in ${retryInterval / 1000} seconds...`);
      //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
      await new Promise((resolve) => setTimeout(resolve, retryInterval)); // Wait before retrying
    }
  }
}

module.exports = connectToDatabase;
