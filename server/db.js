const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://fabio:abcd1234@clusterdb.qsrsy.mongodb.net/mern?retryWrites=true&w=majority";

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("./models/user"),
};
