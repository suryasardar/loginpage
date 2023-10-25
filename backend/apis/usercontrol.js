const {
  create,
  getUserById,
  getUsers,
  updateUsers,
  deleteUsers,
} = require("./userservice");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    if (!body || !body.password) {
      return res.status(400).json({
        success: 0,
        message: "Password is required.",
      });
    }
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserByUserId: (req, res) => {
    con;
    getUserById(ID, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
