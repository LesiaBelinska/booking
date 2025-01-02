const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const data = require('./db.json');

const PORT = 3001;

const app = express();

const corsOptions = {
  origin: ["http://localhost:8080", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/destination', (req, res) => {
    res.json(data.destination);
});

app.get('/hotels', (req, res) => {
    res.json(data.hotels);
});

app.post('/hotels', (req, res) => {
    const { city } = req.body;
    const hotels = data.hotels.filter((hotel) => hotel.city === city);
    res.json(hotels);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });