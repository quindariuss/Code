const json = require("./albums.json");

const data = JSON.parse(
  '[{"name":"John", "age":30, "city":"New York"},{"name":"Bob", "age":40, "city":"NeYork"}]'
);

console.log(json[0].userId);
