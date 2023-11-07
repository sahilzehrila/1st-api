const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('here is the home page bro ')
  console.log("|*you are in home page bro*|")
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000 ");
})