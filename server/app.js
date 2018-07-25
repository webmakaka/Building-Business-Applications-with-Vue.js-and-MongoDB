const express = require('express');
const api = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

mongoose.connect(
  'mongodb://user1:password1@ds145951.mlab.com:45951/building_business_app_with_vue_and_mongo',
  { useNewUrlParser: true }
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  app.listen(app.get('port'), () => {
    console.log('API Server Listening on port ' + app.get('port'));
  });
});
