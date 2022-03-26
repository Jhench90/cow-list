const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', (req, res) => {
  console.log('Serving get request to api/cows')

  res.send('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
