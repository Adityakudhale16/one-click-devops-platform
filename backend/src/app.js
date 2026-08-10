const express = require("express");
const deploymentRoutes = require("./routes/deployment.routes");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api", deploymentRoutes);

// Serve deployed websites
app.use(
  "/deployments",
  express.static(path.join(__dirname, "..", "deployments"))
);

module.exports = app;