const nlp = require('compromise')

var doc = nlp('Can I have a cookie?')
doc.verbs().toNegative()
// 'London is not calling'
console.log(doc.text())
