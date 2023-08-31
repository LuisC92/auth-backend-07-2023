const Password = require("../models/password.model");

const changePassword = (req, res) => {
  Password.change(req.body.hashedPassword, req.body.email)
    .then((results) => {
        console.log(results);
      if (results.affectedRows > 0) {
        res.status(200).send("Your password has been changed");
      } else {
        res.status(404).send("Please enter your new password");
      }
    })
    .catch((err) => {
        console.log(err);

    //   console.error(err);
    //   res.status(500).send("can't change the password");
    });
};

module.exports = {
  changePassword,
};
