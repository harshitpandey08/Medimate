const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://katiyarsonu2110:211014@cluster0.ggkpq5e.mongodb.net/user")
.then (() => {
  console.log ("data base is connected to Atlas")
})

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;