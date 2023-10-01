const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

// jIYZn199qGIC4hPc

// "mongodb+srv://paradigm-guitar:jIYZn199qGIC4hPc@paradigm-guitar.bahej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// "mongodb+srv://paradigm-guitar:7up7up7up@paradigm-guitar.bahej.mongodb.net/"
mongoose.connect(
  "mongodb+srv://paradigm-guitar:7up7up7up@paradigm-guitar.bahej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connect = mongoose.connection;
connect.on("error", console.error.bind(console, "connection error"));
connect.once("open", function () {
  console.log("mongo connected");
});

module.exports = connect;
