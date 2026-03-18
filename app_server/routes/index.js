console.log('Routes file loaded');

const express = require('express');
const router = express.Router();
const ctrlTraveller = require('../controllers/traveller');

router.get('/', ctrlTraveller.home);
router.get('/travel', ctrlTraveller.travel);
router.get('/rooms', ctrlTraveller.rooms);
router.get('/meals', ctrlTraveller.meals);
router.get('/news', ctrlTraveller.news);
router.get('/about', ctrlTraveller.about);
router.get('/contact', ctrlTraveller.contact);

/*404 handler */
router.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;