var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var companies = require('./routes/companies')

app.use(express.static('server/public'));
app.use('/companies', companies);

app.listen(port, function () {
    console.log('up and running on port', port);
});