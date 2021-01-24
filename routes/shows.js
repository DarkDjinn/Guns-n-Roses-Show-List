const express = require('express');
const router = express.Router();
const squel = require('squel');
const { DBQuery } = require('../models/db');

module.exports = {
	createShow: async (req, res) => {
		const date = req.body.date;
		const name = req.body.name;
		const fileType = req.body.fileType;
		const quality = req.body.quality;
		try {
			const q = squel
				.insert()
				.into('shows')
				.set('name', name)
				.set('date', date)
				.set('obtained', 0)
				.set('file_type', fileType)
				.set('quality', quality);
			await DBQuery(q.toString());
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	updateShow: async (req, res) => {
		const id = req.body.id;
		const date = req.body.date;
		const name = req.body.name;
		const fileType = req.body.fileType;
		const quality = req.body.quality;
		try {
			const q = squel
				.update()
				.table('shows')
				.set('name', name)
				.set('date', date)
				.set('file_type', fileType)
				.set('quality', quality)
				.where(`id = ${id}`);
			await DBQuery(q.toString());
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	deleteShow: async (req, res) => {
		try {
			const q = squel.delete().from('shows').where(`id = ${req.body.id}`);
			await DBQuery(q.toString());
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	updateObtainedStatus: async (req, res) => {
		const id = req.body.id;
		const status = !!req.body.status;
		try {
			const q = squel
				.update()
				.table('shows')
				.set('obtained', status ? 0 : 1)
				.where(`id = ${id}`);
			await DBQuery(q.toString());
			res.json({ success: 'true' });
		} catch (err) {
			console.log(err);
		}
	},
	getShows: async (req, res) => {
		const q = squel.select().from('shows');
		if (req.params.id) {
			q.where(`id = ${req.params.id}`);
		}

		const sortBy = req.query.sort;
		const direction = req.query.direction;
		switch (sortBy) {
			case 'id':
				q.order('id', direction);
				break;
			case 'date':
				q.order('date', direction);
				break;
			case 'name':
				q.order('name', direction);
				break;
			case 'file_type':
				q.order('file_type', direction);
				break;
			case 'quality':
				q.order('quality', direction);
				break;
			case 'obtained':
				q.order('obtained', direction);
				break;
			default:
				break;
		}
		console.log(q.toString());
		const shows = await DBQuery(q.toString());
		res.json({ success: shows });
	},
};
