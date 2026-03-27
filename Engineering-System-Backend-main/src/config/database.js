import mongoose from "mongoose";

export const connectDatabase = async () => {
  const connectionString = process.env.MONGO_URI;

  if (!connectionString) {
    throw new Error("MONGO_URI is required to start the backend.");
  }

  await mongoose.connect(connectionString, {
    dbName: process.env.MONGO_DB_NAME || "engineering_management",
  });

  return mongoose.connection;
};
