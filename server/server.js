import app from "./app.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception Err! Server is shutting down. ${err.message}`);
  process.exit(1);
});

// will trigger whenever unhandled promise rejection happen
process.on("unhandledRejection", (err) => {
  console.log(`Unhandled rejection Err! Server is shutting down. ${err.message}`);
  process.exit(1);
});

const connectServer = async function () {
  const Database = await connectDB();
  const PORT = process.env.PORT || 6173;

  if (!Database.connection.host) {
    process.exit(1);
  }

  console.log(`${Database.connection.host} connected successfully`);

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

connectServer();
