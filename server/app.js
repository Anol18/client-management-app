const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql2");
const port = 3001;

// starting serer in port
app.listen(port, () => {
  console.log(`Stearting server on ${port}`);
});

router.get("/Members", (req, res, next) => {
  res.send("Api is working");
});

// MySql connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dai_info_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

let sql = `INSERT INTO login(username, password) VALUES('username','password')`;

// connection.query("INSERT INTO `login`(`username`, `password`) VALUES ('Username','Password')", (err, rows, fields) => {
//   if (err) throw err;

// console.log("The solution is: ", rows[0].solution);let sql = `INSERT INTO todos(title,completed)
// VALUES('Learn how to insert a new row',true)`;

// execute the insert statment
connection.query(sql);

connection.end();
