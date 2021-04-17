const { json } = require('body-parser');
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



app.get('/',(req,res)=>
{
    client
    .connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack))
})

app.get('/users',(req, res) => 
{
    client.query
    ('select * from users')
    .then(console.log)
})

app.listen(4000, ()=>
{
    console.log('Listening at localhost:4000')
})