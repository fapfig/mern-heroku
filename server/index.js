const path = require("path");

// Fast, unopinionated, minimalist web framework for node.
const express = require("express");
// Mongoose is a MongoDB object modeling tool designed to work in an
// asynchronous environment. Mongoose supports both promises and
// callbacks.
const mongoose = require("mongoose");
// Provides a Connect/Express middleware that can be used to enable CORS
const cors = require("cors");

const config = require("./config/key");

// Connect to mongoDB
//---------------------------------
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = mongoose
  .connect(config.mongoURI, connectionOptions)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
//---------------------------------

// Create a new express instance and put it into app variable.
const app = express();
// By default, Express doesn't know how to read the request body.
// So, we need to add a middleware to be able to parse them in every
// single request
app.use(express.json());
// Enable cors
app.use(cors());
// api routes
app.use("/api/user", require("./controllers/user"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
