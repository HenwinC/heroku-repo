const express = require("express")

const server = express()

const PORT = 3000

server.listen(PORT, () => {
  console.log("Server listening")
});

server.get("/Henwin", (req,res)=> {
  res.send("<h1> Hi Henwin!</h1>");
});