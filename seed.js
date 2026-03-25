const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./app_api/models/db');
require('./app_api/models/travlr');

const Trip = mongoose.model('trips');

// Load JSON file
const trips = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'trips.json'), 'utf-8')
);

// Insert into database
Trip.insertMany(trips)
    .then(() => {
        console.log('Data successfully loaded');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log('Error loading data:', err);
        mongoose.connection.close();
    });
