const mysql = require("mysql");

const pool = mysql.createPool({
  database: "study",
  user: "root",
  password: "root",
  host: "localhost",
  connectionLimit: 30
});

const query = (sql, placeholder) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("getConnection is err:", err);
        reject(err);
      } else {
        connection.query(sql, placeholder, (err, rows) => {
          if (err) {
            console.log("sql is err :", err);
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query
};
