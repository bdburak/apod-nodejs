const express = require('express');

const path = require('path');
const axios = require('axios');

const { generateRandomDate }  = require('./utils/generateRandomDate');

const app = express();

// setup static and middleware
app.use(express.static('public'))


app.get('/api/random', (req, res) => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=oc8pgVHdxt7tAB4JehrLeFZr09ATTSO7zzOsuPje&date=" + generateRandomDate())
  .then(function (response) {
      res.json(response.data);
  })
  .catch(function (error) {
      // handle error
      res.sendStatus(error.code);
      res.json(error);
  })
});



app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
})