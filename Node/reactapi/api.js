const express = require('express')
const {Client} = require('pg')
const app = express()
const port = 3000

const client = new Client(
	{
		connectionString: "postgres://quindarius:root@localhost/quindarius"
	}
)

client.connect()
app.get('/',(req,res) =>
{
	res.send('Hello World')
})

app.listen( port, ()=>
{
	console.log('Example app listening at http://localhost:${port}')
})