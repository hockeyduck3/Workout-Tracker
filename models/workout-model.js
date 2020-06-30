const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        }, 

        exercises: [{
            type: {
                type: String,
                required: 'Exercise type is required'
            },

            name: {
                type: String,
                required: 'This exercise needs a name'
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
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

exerciseSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', exerciseSchema);

module.exports = Workout;