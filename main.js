
// Expressin tapsirigi
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send( [{id:"1",name:"Hasan",age:"20"},{id:"2",name:"Nurlan",age:"20"},{id:"1",name:"ALi",age:"20"}]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 


