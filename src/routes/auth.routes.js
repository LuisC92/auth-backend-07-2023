const authRoutes = require("express").Router();
const UserController = require("../controllers/users.controller");
const { verifyEmail, verifyEmailToCreateUser, hashPassword, verifyPassword } = require("../middlewares/users.middleware");

//* create a new user
//* endpoint: /auth/sign-up
authRoutes.post("/sign-up", verifyEmailToCreateUser, hashPassword, UserController.createUser);

//* login with an user
//* endpoint: /auth/login
authRoutes.post("/login", verifyEmail, verifyPassword, UserController.login)

module.exports = authRoutes;
