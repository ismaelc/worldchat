#!/usr/bin/env node

var express = require('express'),
        gig = require('./translate');

var app = express();

app.configure(function () {
   app.use(express.logger('dev'));
   app.use(express.bodyParser());
});

app.get('/t', gig.translate);

app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log('Listening on port 3000...');
