const fetch = require('node-fetch');
// Request (GET http://localhost:4000/users)
fetch("http://localhost:4000/users", {
	  "method": "GET",
	  "headers": {}
})
.then((res) => res.text())
.then(console.log.bind(console))
.catch(console.error.bind(console));
