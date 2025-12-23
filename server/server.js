import app from "./app.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

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
