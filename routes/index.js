const express = require('express');
const router = express.Router();
const { getShows, updateObtainedStatus, deleteShow, createShow, updateShow } = require('./shows');

router.route('/getshows/:id?').get(getShows);
router.route('/updatestatus').post(updateObtainedStatus);
router.route('/deleteshow').post(deleteShow);
router.route('/createshow').post(createShow);
router.route('/updateshow').post(updateShow);

module.exports = router;
