const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');
const auth = require('../middleware/auth');

router.get('/trips', ctrlTrips.tripsList);

router.get('/trips/:tripId', ctrlTrips.tripsReadOne);

router.delete('/trips/:tripId', auth, ctrlTrips.tripsDeleteOne);

router.post('/trips', auth, ctrlTrips.tripsAddOne);

router.put('/trips/:tripId', auth, ctrlTrips.tripsUpdateOne);

router
  .route('/register')
  .post(authController.register);

router
  .route('/login')
  .post(authController.login);


module.exports = router;