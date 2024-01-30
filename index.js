const express = require('express');
const cors = require('cors');
const log4js = require('log4js');
const app = express();
const proxy = require('node-global-proxy').default;
const router = express.Router();
const applyRoutes = require('./app/routes/index-route');
const bodyParser = require('body-parser');
const logger = log4js.getLogger();
const { port } = require('./app/config/config');
const config = require('./app/config/config');
const db = require('./app/config/db.config');
const https = require('https');
const http = require('http');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const serveIndex = require('serve-index');

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(
  '/api/public',
  express.static('public'),
  serveIndex('public', { icons: true })
);

app.get('/api/health-check', (req, res) => {
  res.send('Server is up and running');
});


app.use('/api', applyRoutes.routes(router));

app.use(function (err, req, res, next) {
  logger.error(err);
  // console.log(err);
  if (err.response) {
    return res
      .status(err.response?.status)
      .send(err.response?.data);
  }
  return res
    .status(500)
    .send(
      'Internal Server Error. Please contact Administrator'
    );
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to M'list application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
