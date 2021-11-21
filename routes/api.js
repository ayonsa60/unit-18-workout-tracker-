const router = require('express').Router();
const { get } = require('http');
const Workout = require('../models/workout.js');

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((workoutData) => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.json(err);
    })
});
router.get