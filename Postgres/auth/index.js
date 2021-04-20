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
const { rows } = client.query('select * from users')
res.send(rows[0])
console.log(rows[0])
 
})

app.listen(4000, ()=>
{
    console.log('Listening at localhost:4000')
})