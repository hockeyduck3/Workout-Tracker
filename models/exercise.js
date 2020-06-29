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

const Exercise = mongoose.modelNames('Exercise', exerciseSchema);

module.exports = Exercise;