const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Product } = require("./schemas/product");
const bodyParser = require("body-parser");
// const cors = require('cors');
require("dotenv").config();
// app.use(cors());
// app.options('*', cors())
app.use(express.static("true"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/connect-mongodb", (req, res) => {
  mongoose
    .connect(process.env.MONGODB_KEY)
    .then(() => {
      console.log("Database Connection is ready...");
      res.send("Database Connection is ready...");
      res.redirect("/succcess-page");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/success-page", (req, res) => {
  res.sendFile(__dirname + "/public/hello.html");
});

app.post("/submit-value", async (req, res) => {
  let filter = {};
  if (req.body.value) {
    filter = { name: req.body.value };
  }
  const productList = await Product.find(filter);
  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

app.listen(3002, () => {
  console.log("server is running at 3002");
});
