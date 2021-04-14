
const { Client } = require('pg');

var connectionString = "postgres://quindarius:root@localhost:5432/quindarius";



const client = new Client
(
	{
		connectionString: connectionString
	}
);

client.connect();

const text = 'insert into employee values ($1, $2, $3) returning *'

const values = [3, 'bob', 1000];

client.query(text, values, (err, res) => {
	  if (err) {
		console.log(err.stack)
	  } else {
		console.log(res.rows[0])
		// { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
	  }
	})

client.query('select * from employee', (err, res) => {
	  console.log(err, res)
	  client.end()
	})