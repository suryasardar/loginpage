const pool = require("../config/database");
module.exports = {
  create: (data, callback) => {
    pool.query(
      `Insert into login(firstname,lastname,email,password)
     values(?,?,?,?)`,
      [data.firstname, data.lastname, data.email, data.password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(`select * from login`),
      [],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      };
  },
  getUserById: (ID, callback) => {
    pool.query(
      `select firstname,lastname,email,password from login  where ID=?`
    ),
      [ID],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      };
  },
  updateUsers: (data, callback) => {
    pool.query(
      `update login set firstname=?,lastname=?,email=?,password=? where id=?`
    ),
      [data.firstname, data.lastname, data.email, data.password, data.ID],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      };
  },
  deleteUsers: (data, callback) => {
    pool.query(`delete * from login where id=?`),
      [data.ID],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      };
  },
};
