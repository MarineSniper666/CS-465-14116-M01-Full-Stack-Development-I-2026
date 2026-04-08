const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find().exec();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET one trip by ID
const tripsReadOne = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripId).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsDeleteOne = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.tripId).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(204).json(null);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsAddOne = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        });

        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json(err);
    }
};

const tripsUpdateOne = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.tripId,
            {
                name: req.body.name,
                image: req.body.image,
                description: req.body.description
            },
            {
                new: true,
                runValidators: true
            }
        ).exec();

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    tripsList,
    tripsReadOne,
    tripsDeleteOne,
    tripsAddOne,
    tripsUpdateOne
};