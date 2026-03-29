import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDatabase } from "./src/config/database.js";
import apiRouter from "./src/routes/index.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import { seedMockProjects } from "./src/seed/mock-projects.js";
import { seedSuperAdmin } from "./src/seed/superadmin.seed.js";
import { seedNashrRecords } from "./src/seed/nashr.seed.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get("/", (_req, res) => {
  res.json({ success: true, message: "Engineering Management System API is running" });
});

app.use("/api", apiRouter);

app.use("*", (_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

const PORT = Number(process.env.PORT || 5000);

const startServer = async () => {
  await connectDatabase();
  await seedMockProjects();
  await seedSuperAdmin();
  await seedNashrRecords();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
