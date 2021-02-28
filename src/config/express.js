const express = require('express'),
    app = express(),
    env = require('dotenv').config(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    router = require('../routes')(),
    boom = require('express-boom');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
    .use(bodyParser.json())
    .use(boom());
    
app.use('/api', router);

const expressOasGenerator = require('express-oas-generator');
expressOasGenerator.init(app, {});

// app.use('/*', (req, res, next) => { res.boom.notFound() });

module.exports = app;