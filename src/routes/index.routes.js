const authRoutes = require("./auth.routes")
const passwordRoutes = require("./password.routes")

const setupRoutes = (server) => {
  server.use("/auth", authRoutes);
  server.use("/password", passwordRoutes);
};

module.exports = { setupRoutes };
