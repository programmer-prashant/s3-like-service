const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const bucketRoutes = require('./routes/bucketRoutes');
const objectRoutes = require('./routes/objectRoutes');

app.use('/buckets', bucketRoutes);
app.use('/objects', objectRoutes);

module.exports = app;