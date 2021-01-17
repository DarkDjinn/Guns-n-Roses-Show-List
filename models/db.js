const mysql = require('mysql');
const config = require('../config');

var pool = mysql.createPool({
	connectionLimit: 5,
	host: config.DatabaseURI,
	user: config.DatabaseUser,
	password: config.DatabasePassword,
	port: config.Port,
	database: config.Database,
});

const DBQuery = sql => {
	return new Promise((resolve, reject) => {
		pool.query(sql, function (err, result, fields) {
			if (err) return reject(err);
			return resolve(result);
		});
	});
};

const closeConnection = () => {
	pool.end();
};

module.exports = { DBQuery, closeConnection };
