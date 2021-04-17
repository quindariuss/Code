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

app.get('/users',(req, res) => 
{
    client
      .query('select * from users')
      .then
      (
          res => 
          {
              console.log(res.rows)
          }
      )
      .catch
      (
          e => console.error(e.stack)
      )
 
})

app.listen(4000, ()=>
{
    console.log('Listening at localhost:4000')
})