const { Client } = require("pg");
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

client.query("select * from accounts", (err, res) => {
  console.log(err ? err.stack : res);
  client.end();
});
