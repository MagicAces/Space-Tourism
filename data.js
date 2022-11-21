const data = require(__dirname + "/public/data.json");
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
})

app.listen(3000, ()=> {
  console.log("Server on port 3000");
})
