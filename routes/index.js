const express = require('express');
const router = express.Router();
const { getShows, updateObtainedStatus, deleteShow, createShow, updateShow } = require('./shows');
const { getShowSongs, createSong, deleteSong } = require('./songs');

router.route('/show/getshows/:id?').get(getShows);
router.route('/show/updatestatus').post(updateObtainedStatus);
router.route('/show/deleteshow').post(deleteShow);
router.route('/show/createshow').post(createShow);
router.route('/show/updateshow').post(updateShow);

router.route('/songs/getshowsongs/:id').get(getShowSongs);
router.route('/songs/createsong').post(createSong);
router.route('/songs/deletesong').post(deleteSong);

module.exports = router;
