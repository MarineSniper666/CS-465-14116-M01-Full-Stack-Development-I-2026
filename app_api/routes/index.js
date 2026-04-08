const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

router.get('/trips', ctrlTrips.tripsList);

router.get('/trips/:tripId', ctrlTrips.tripsReadOne);

router.delete('/trips/:tripId', ctrlTrips.tripsDeleteOne);

router.post('/trips', ctrlTrips.tripsAddOne);

router.put('/trips/:tripId', ctrlTrips.tripsUpdateOne);

module.exports = router;