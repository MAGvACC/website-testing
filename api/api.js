const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
  }))
  

app.get('/GetEvent', function(req, res){


    fetch("https://my.vatsim.net/api/v1/events/all")
    .then(res => res.json())
    .then(data => res.send(data))
  
  })
  




var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  
  
  