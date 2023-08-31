const database = require("../database/database-config");

const change = (hashedPassword, email) => {
  return database
    .query("UPDATE users SET  hashedPassword = ? WHERE email = ?", [
      hashedPassword,
      email,
    ])
    .then(([results]) => results);
};

module.exports = {
  change,
};
