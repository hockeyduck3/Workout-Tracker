const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find().then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(error => {
        res.json(error);
    });
});

router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body).then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(error => {
        res.json(error);
    });
});

router.put('/api/workouts/:id', (req, res) => {
    console.log(req.params.id);

    db.Workout.findOneAndUpdate(
        {_id: req.params.id},

        {
            $push: {
                exercises: req.body
            }
        }, 
        { 
            new: true 
        }
    ).then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(error => {
        res.json(error);
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find().then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(error => {
        res.json(error);
    });
});

module.exports = router;