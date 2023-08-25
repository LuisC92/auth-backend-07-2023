const User = require("../models/users.model");

const createUser = (req, res) => {
  // use model to create user
  User.createNewUser(req.body)
    // send response
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(201).json({
          userEmail: req.body.email,
          userID: results.insertId,
          message: "User created successfully",
        });
      } else {
        res.status(422).send("Unprocessable Entity - unable to process");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating user");
    });
};

const login = (req, res) => {
  if (req.user !== null && Object.keys(req.user).length > 0) {
    res.status(200).send(req.user);
  } else {
    res.status(404).send("Invalid credentials");
  }
};

module.exports = {
  createUser,
  login,
};
