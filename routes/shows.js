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
		const q = squel
			.select()
			.fields([
				's.id',
				's.date',
				's.name',
				's.file_type',
				's.quality',
				's.obtained',
				'sl.song_number',
				'sl.song_name',
			])
			.from('shows', 's');
		if (req.params.id) {
			q.where(`id = ${req.params.id}`);
		}

		q.left_join('song_list', 'sl', 'sl.show_id = s.id');

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

		const shows = await DBQuery(q.toString());
		const showsWithSongs = [];

		for (let show of shows) {
			const songNumber = show.song_number;
			const songName = show.song_name;
			delete show.song_number;
			delete show.song_name;

			if (songNumber && songName) show.songs = [{ song_number: songNumber, song_name: songName }];
			else show.songs = [];

			let pushed = false;

			if (!showsWithSongs.length) showsWithSongs.push(show);
			else {
				for (let [i, v] of showsWithSongs.entries()) {
					if (v.id === show.id) {
						showsWithSongs[i].songs.push(show.songs[0]);
						pushed = true;
						break;
					}
				}
				if (!pushed) {
					showsWithSongs.push(show);
				}
			}
		}

		res.json({ success: showsWithSongs });
	},
};
