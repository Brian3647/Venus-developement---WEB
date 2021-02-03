const express = require('express');
const app = express();
const path = require("path")
//const ips = require('./localip')();
const port = process.env.PORT || 3000;

console.log(ips);

//app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"))
});

app.listen(port, () => {
  console.log("Web on!")
})
