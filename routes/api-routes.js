const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Exercise.find().then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(error => {
        res.json(error);
    });
});

module.exports = router;