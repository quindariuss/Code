const fs = require('fs')

fs.readFile('test.md', 'utf8' , (err, data) => {
  console.log(data)
})