const app = require("./index");
const mongoose = require("mongoose");
const connect = require('./config/db');


app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
