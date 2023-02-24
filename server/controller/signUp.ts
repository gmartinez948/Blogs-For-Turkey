const db = require("../models");
const User = db.models.user;
const bcrypt = require("bcrypt");

// type UserSignUp = {
//   username: string;
//   password: string;
//   email: string;
// };

const createUser = async ({ username, password, email }) => {
  try {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds).then((hash) => {
      db.models.User.create({ username, password: hash, email });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
