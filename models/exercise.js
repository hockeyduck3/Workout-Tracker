const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date
    }, 

    exercises: [{
        type: {
            type: String
        },

        name: {
            type: String
        },

        weight: {
            type: Number
        },

        distance: {
            type: Number
        },

        sets: {
            type: Number
        },

        reps: {
            type: Number
        },

        duration: {
            type: Number
        },
    }]
});

const Workout = mongoose.model('Workout', exerciseSchema);

module.exports = Workout;