const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;
// starting serer in port
app.listen(port, () => {
  console.log(`Stearting server on ${port}`);
});

// MySql connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dai_info_db",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Member registaration sql query insertion
app.get("/api/Member", (req, res) => {
  const memberRegiData = req.body.memberInputData;
  const sql =
    "INSERT INTO `membership_info`(`photo_ref`, `catagory`, `factory`, `m_union`, `joning_date`, `factory_join_date`, `union_designation`, `department`, `factory_id_no`, `factory_designation`, `wpc_designation`, `osh_commitee_designation`, `membership_status`, `is_paid`, `f_name`, `l_name`, `full_name`, `father_name`, `mother_name`, `gender`, `date_of_birth`, `spouse_name`, `blood_group`, `nid`, `mobile_number`, `education`, `religion`, `present_address`, `permanent_address`) VALUES (' ',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  mysql.query(sql, memberRegiData, (err, result) => {
    console.log(result);
  });
});

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

// let sql = `INSERT INTO login(username, password) VALUES('username','password')`;

// connection.query("INSERT INTO `login`(`username`, `password`) VALUES ('Username','Password')", (err, rows, fields) => {
//   if (err) throw err;

// console.log("The solution is: ", rows[0].solution);let sql = `INSERT INTO todos(title,completed)
// VALUES('Learn how to insert a new row',true)`;

// execute the insert statment
// connection.query(sql);

// connection.end();
module.exports = router;
