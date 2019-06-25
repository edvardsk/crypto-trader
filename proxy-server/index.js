const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,HEAD,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Allow', 'GET,POST,PUT,DELETE,HEAD,OPTIONS');
  next();
});

app.get('/asset-pairs', (req, res) => {
  request('https://api.kraken.com/0/public/AssetPairs', { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    res.send(body);
  });
});

app.listen(app.get('port'), () => {
  console.log('server started on port: ', app.get('port'));
});
