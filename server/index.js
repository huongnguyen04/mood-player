const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.listen(4000, () => {
  console.log("server started on port 4000");
});