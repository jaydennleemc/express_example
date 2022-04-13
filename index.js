const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.json({
    "message": "Welcome to the home page",
    "status": "success"
  });
})

const server = app.listen(3000, function () {

  const host = server.address().address
  const port = server.address().port

  console.log("Express web application was started", host, port)

})