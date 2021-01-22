const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const shoesRouter = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'gnr', 'dist')));

app.use('/gnr/show', shoesRouter);

app.listen('3423', () => {
	console.log('Server started on 3423');
});
