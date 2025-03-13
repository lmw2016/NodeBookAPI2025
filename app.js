const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookApi", {
  useNewUrlParser: true,
});

const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require("./routes/bookRouter")(Book);

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Liming Wu Book API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
