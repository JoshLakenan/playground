const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the playground.');
})

app.listen(3000, () => {
  console.log("listening on port 3000...");
})