const authRoutes = require("./auth.routes")

const setupRoutes = (server) => {
  server.use("/auth", authRoutes);
};

module.exports = { setupRoutes };
