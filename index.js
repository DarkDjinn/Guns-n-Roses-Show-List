const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const shoesRouter = require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'gnr', 'dist')));

app.use('/gnr', shoesRouter);

app.listen('3423', () => {
	console.log('Server started on 3423');
});
