const express = require('express');
const router = express.Router();
const squel = require('squel');
const { DBQuery } = require('../models/db');

module.exports = {
	getShowSongs: async (req, res) => {
		const showId = req.params.id;
		try {
			const q = squel
				.select()
				.fields(['sl.song_number', 'sl.song_name'])
				.from('song_list', 'sl')
				.join('shows', 's', 'sl.show_id = s.id')
				.where(`s.id = ${showId}`)
				.order('sl.song_number');

			const songs = await DBQuery(q.toString());
			res.json({ success: songs });
		} catch (err) {
			console.log(err);
		}
	},
	createSong: async (req, res) => {
		const showId = req.body.id;
		const songNumber = req.body.songNumber;
		const songName = req.body.songName;
		try {
			const q = squel
				.insert()
				.into('song_list')
				.set('song_number', songNumber)
				.set('song_name', songName)
				.set('show_id', showId);

			await DBQuery(q.toString());
			res.json({ success: true });
		} catch (err) {
			console.log(err);
		}
	},
	deleteSong: async (req, res) => {
		const showId = req.body.showId;
		const songNumber = req.body.songNumber;
		try {
			const q = squel
				.delete()
				.from('song_list')
				.where(`show_id = ${showId}`)
				.where(`song_number = ${songNumber}`);
			await DBQuery(q.toString());
			res.json({ success: true });
		} catch (err) {
			console.log(err);
		}
	},
};
