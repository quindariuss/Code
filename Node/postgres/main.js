const {Client} = require('pg')
var cs = "postgres://quindarius:root@localhost:5432/quin"

const client = new Client (
	{
	connectionString: cs
	}
)
client.query('select * from accounts' , (err, res) => {
console.log(err ? err.stack : res)
	client.end()
})
