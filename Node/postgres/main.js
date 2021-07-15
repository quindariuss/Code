const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: "http://localhost:62683" }));
// routes will go here
app.post("/api", function (req, res) {
  const email = req.query.email;
  const password = req.query.password;

  res.send({
    status: validateUser(email, password),
  });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);

var cs = "postgres://quin:root@localhost:5432/quin";

const client = new Client({
  connectionString: cs,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

var results;

client.query("select * from account", (err, res) => {
  console.log(err ? err.stack : (results = res.rows[0]));
  client.end();
});

console.log({ results });

function validateUser(email, password) {
  if (email == "quindarius" && password == "123") {
    return "valid user";
  } else {
    return "invalid user";
  }
}
