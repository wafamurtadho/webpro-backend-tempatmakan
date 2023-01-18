const express = require('express');
var cors = require('cors')
const app = express();
const port = 3030;
var randomWords = require('random-words');

app.use(cors());
app.use(express.json());
app.get('/helloworld', (req,res) =>{
  res.send('Hello World!');
});

app.get('/sensor', (req,res)=>{
  res.send({sensor : 100});
})

app.get('/getlist', (req,res)=>{
  res.send({sensor_suhu : [{suhu: 38 , waktu : 11.11},{suhu: 39 , waktu : 11.15},{suhu: 37 , waktu : 11.21}]});
})

app.get('/random', (req,res) =>{
  res.send(randomWords() + '\n');
});

app.post('/sensorpost', (req,res)=>{
  var d = req.body;
  console.log(req.body.suhu)
  res.send("Data suhu" + req.body.suhu);
});


app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)

});
