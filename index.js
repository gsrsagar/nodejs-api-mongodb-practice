const express = require("express");
const app = express();
const { logger, ipMiddleare } = require("./middlewares");

const { connectDB, Students, Departments } = require("./databaseops");

const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/newnode");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(ipMiddleare);

async function connnectionEntablish() {
  await connectDB(); // Call the connectDB function to connect to MongoDB
}

//connnectionEntablish();

app.get("/", async (req, res) => {
  await client.connect();
  const db = client.db("newnode");
  const users = await db.collection("students").find({}).toArray();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("Access the API at http://localhost:3000");
});
