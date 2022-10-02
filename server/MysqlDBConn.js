const dataBase = function () {
  const mysql = require("mysql2");
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dai_info_db",
  });
  db();
};

module.exports = dataBase;
