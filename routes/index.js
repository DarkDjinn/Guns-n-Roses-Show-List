const express = require('express');
const router = express.Router();
const { getAllShows, updateObtainedStatus, deleteShow, createShow } = require('./shows');

router.route('/getallshows').get(getAllShows);
router.route('/updatestatus').post(updateObtainedStatus);
router.route('/deleteshow').post(deleteShow);
router.route('/createshow').post(createShow);

module.exports = router;
