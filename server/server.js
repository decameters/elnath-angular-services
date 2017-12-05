var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

var companies = require('./routes/companies')
var cars = require('./routes/cars')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/companies', companies);
app.use('/cars', cars);

app.listen(port, function () {
    console.log('up and running on port', port);
});