const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_STRING);

// declare Schema
let Schema = mongoose.Schema;

let zooSchema = new Schema(
  {
    zoo: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: true,
    },
    commonName: {
      type: String,
      required: true,
    },
    givenName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isTransportable: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "animals",
  }
);

module.exports.Animal = mongoose.model("animals", zooSchema);
