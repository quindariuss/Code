const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name

// Create a new MongoClient
const client = new MongoClient(url);

// // Use connect method to connect to the server
// client.connect(function (err) {
//   const db = client.db("myproject").collection("test");
//   try {
//   const data = db.find({ name: "bob" });
//   }finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
//   console.log(data);
// });

async function run() {
  try {
    await client.connect();
    const db = client.db("myproject").collection("test");
    // Query for a movie that has the title 'Back to the Future'

    const data = await db.find();
    console.log({ data });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
