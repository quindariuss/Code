const express = require('express');
const app = express();
const {Client} = require('pg');
var cs = "postgress://quindarius:root@localhost:5432/tauth"

const client = new Client
(
    {
        connectionString: cs
    }
)

client
.connect()
.then(() => console.log('connected'))
.catch(err => console.error('connection error', err.stack))

app.get('/',(req,res) =>
{
  res.send("hello")
})

app.get("/users", async function(req, res, next) {
  try {
    const results = await client.query("SELECT * FROM users");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

app.listen(4000, ()=>
{
    console.log('Listening at localhost:4000')
})