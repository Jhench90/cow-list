const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const modules = require('../database/index.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/cows', (req, res) => {
  console.log('Serving get request to api/cows')
  modules.get((response)=>{
    res.status(200).send(response)
  })
})

app.post('/api/cows', (req, res) => {
  console.log('Serving post request to api/cows')
  var name = req.body.name
  var description = req.body.description
  modules.post(name, description, (response)=>{
    res.status(201).send(response)
  })
})


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
