const express = require("express");
const app = express();
const massive = require("massive");
// const controller = require("./controller");
require("dotenv").config();
app.use(express.json());
const { CONNECTION_STRING } = process.env;
// let db;
const {
  getTheProducts,
  postTheProducts,
  deleteTheProducts
} = require("./controller");

massive(CONNECTION_STRING).then(db => {
  console.log("database connected");
  app.set("db", db);
});

app.get("/api/inventory", getTheProducts);

app.post("/api/product", postTheProducts);

app.delete("/api/product/:id", deleteTheProducts);

const port = 4000;

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
