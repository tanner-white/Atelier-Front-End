require('dotenv').config();
const express = require('express');
const axios = require('axios');
// const cors = require('cors');

const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';
const options = {
  headers: {
    Authorization: process.env.AUTH_TOKEN,
  },
};

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(expres.static(path.join(__dirname, '../public')));

app.get('/styles/:productId', (req, res) => {
  axios.get(`${API}products`, options).then((response) => res.send(response.data));
});

app.get('/products', (req, res) => {
  axios.get(`${API}products`, options).then((response) => (response.data));
});

app.get('/reviews', (req, res) => {
  // http://example.com/page?parameter=value&also=another
  axios.get(`${API}products/reviews/66642`, options).then((response) => (response.data));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log('Listening on port 3001');
