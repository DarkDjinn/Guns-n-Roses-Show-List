const express = require('express');
const router = express.Router();
const { DBQuery } = require('../models/db');

module.exports = {
	createShow: async (req, res) => {
		const date = req.body.date;
		const name = req.body.name;
		try {
			await DBQuery(`INSERT INTO shows (name, date, obtained) VALUES ('${name}', '${date}', '0')`);
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	deleteShow: async (req, res) => {
		try {
			await DBQuery(`DELETE FROM shows where id = ${req.body.id}`);
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	updateObtainedStatus: async (req, res) => {
		const id = req.body.id;
		const status = !!req.body.status;
		await DBQuery(`UPDATE shows SET obtained = ${status ? 0 : 1} where id = ${id}`);
		res.json({ success: 'true' });
	},
	getAllShows: async (req, res) => {
		const shows = await DBQuery('SELECT * FROM shows');
		res.json({ success: shows });
	},
};
